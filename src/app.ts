interface Draggable {
   dragStartHandler(event: DragEvent): void;
   dragEndHandler(event: DragEvent): void;
 }
 
 interface DragTarget {
   dragOverHandler(event: DragEvent): void;
   dropHandler(event: DragEvent): void;
   dragLeaveHandler(event: DragEvent): void;
 }

// Project Type
enum ProjectStatus {
   Active,
   Finished
 }
 
 class Project {
   constructor(
     public id: string,
     public title: string,
     public description: string,
     public people: number,
     public status: ProjectStatus
   ) {}
 }
 
 // Project State Management
 type Listener<T> = (items: T[]) => void;

 class State<T> {
   protected listeners: Listener<T>[] = [];
 
   addListener(listenerFn: Listener<T>) {
     this.listeners.push(listenerFn);
   }
 }

class ProjectState {
   private listeners: any[] = [];
   private projects: any[] = [];
   private static instance: ProjectState;

   private constructor() { }

   static getInstance() {
      if (this.instance) {
         return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
   }

   addListener(listenerFn: Function) {
      this.listeners.push(listenerFn);
   }

   addProject(title: string, description: string, numOfPeople: number) {
      const newProject = {
         id: Math.random().toString(),
         title: title,
         description: description,
         people: numOfPeople
      };
      this.projects.push(newProject);
      for (const listenerFn of this.listeners) {
         listenerFn(this.projects.slice());
      }
   }
}
 
 const projectState = ProjectState.getInstance();

// Validation
interface Validatable {
   value: string | number;
   required?: boolean;
   minLength?: number;
   maxLength?: number;
   min?: number;
   max?: number;
}

function validate(validatableInput: Validatable) {
   let isValid = true;

   if(validatableInput.required) {
      isValid = isValid && validatableInput.value.toString().trim().length !== 0;
   }
   
   if(validatableInput.minLength != null && typeof validatableInput.value === 'string') {
      isValid = isValid && validatableInput.value.length >= validatableInput.minLength;
   }
   
   if(validatableInput.maxLength != null && typeof validatableInput.value === 'string') {
      isValid = isValid && validatableInput.value.length <= validatableInput.maxLength;
   }
   
   if(validatableInput.min != null && typeof validatableInput.value === 'number') {
      isValid = isValid && validatableInput.value >= validatableInput.min;
   }
   
   if(validatableInput.max != null && typeof validatableInput.value === 'number') {
      isValid = isValid && validatableInput.value <= validatableInput.max;
   }

   return isValid;
}

// Autobind decorator
function autobind(_: any, _2 :string, descriptor: PropertyDescriptor) {
   const originalMethod = descriptor.value;
   const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
         const boundFn = originalMethod.bind(this);
         return boundFn;
      }
   };

   return adjDescriptor;
}

// ProjectInput lass
class ProjectInput {
   templateElement: HTMLTemplateElement;
   hostElement: HTMLDivElement;
   element: HTMLFormElement;
   titleInputElement: HTMLInputElement;
   descriptionInputElement: HTMLInputElement;
   peopleInputElement: HTMLInputElement;

   

   constructor() {
      this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
      this.hostElement = document.getElementById('app')! as HTMLDivElement;

      const importedNode = document.importNode(this.templateElement.content, true);
      this.element = importedNode.firstElementChild as HTMLFormElement;
      this.element.id = 'user-input';

      this.titleInputElement = this.element.querySelector('#title')!;
      this.descriptionInputElement = this.element.querySelector('#description')!;
      this.peopleInputElement = this.element.querySelector('#people')!;

      this.configure();
      this.attach();
   }

   private attach() {
      this.hostElement.insertAdjacentElement('afterbegin', this.element);
   }

   private configure() {
      this.element.addEventListener('submit', this.submitHandler);
   }

   private gatherUserInput(): [string, string, number] | void {
      const enteredTitle = this.titleInputElement.value;
      const enteredDescription = this.descriptionInputElement.value;
      const enteredPeople = this.peopleInputElement.value;

      const titleValidatable: Validatable = {
         value: enteredTitle,
         required: true
      };

      const descriptionValidatable: Validatable = {
         value: enteredDescription,
         required: true,
         minLength: 5 
      };

      const peopleValidatable: Validatable = {
         value: enteredPeople,
         required: true,
         min: 1,
         max: 5
      }

      if(!validate(titleValidatable) || !validate(descriptionValidatable) || !validate(peopleValidatable)) {
         alert('invalid input');
         return;
      }
      return [enteredTitle, enteredDescription, parseFloat(enteredPeople)];
   }

   private clearInputs() {
      this.titleInputElement.value = '';
      this.descriptionInputElement.value = '';
      this.peopleInputElement.value = '';
   }
   
   @autobind
   private submitHandler(event: Event) {
      event.preventDefault();
      const userInput = this.gatherUserInput();
      if(Array.isArray(userInput)){
         const [title, description, people] = userInput;
         console.log(title, description, people);
         this.clearInputs();
      }
   }
}

// ProjectList Class
class ProjectList {
   templateElement: HTMLTemplateElement;
   hostElement: HTMLDivElement;
   element: HTMLElement;
   assignedProjects: Project[];

   constructor(private type: 'active' | 'finished') {
      this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
      this.hostElement = document.getElementById('app')! as HTMLDivElement;
      this.assignedProjects = [];

      const importedNode = document.importNode(this.templateElement.content, true);
      this.element = importedNode.firstElementChild as HTMLElement;
      this.element.id = `${this.type}-projects`;

      projectState.addListener((projects: Project[]) => {
         const relevantProjects = projects.filter(prj => {
            if (this.type === 'active') {
               return prj.status === ProjectStatus.Active;
            }
            return prj.status === ProjectStatus.Finished;
         });
         this.assignedProjects = relevantProjects;
         this.renderProjects();
      });

      this.attach();
      this.renderContent();
   }

   private renderProjects() {
      const listEl = document.getElementById(
         `${this.type}-projects-list`
      )! as HTMLUListElement;
      listEl.innerHTML = '';
      for (const prjItem of this.assignedProjects) {
         const listItem = document.createElement('li');
         listItem.textContent = prjItem.title;
         listEl.appendChild(listItem);
      }
   }

   private renderContent() {
      const listId = `${this.type}-projects-list`;
      this.element.querySelector('ul')!.id = listId;
      this.element.querySelector('h2')!.textContent =
      this.type.toUpperCase() + ' PROJECTS';
   }

   private attach() {
      this.hostElement.insertAdjacentElement('beforeend', this.element);
   }

   @autobind
   dragOverHandler(_: DragEvent) {
      const listEl = this.element.querySelector('ul')!;
      listEl.classList.add('droppable');
   }
}

// ProjectItem Class
class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> {
   private project: Project;
 
   constructor(hostId: string, project: Project) {
     super('single-project', hostId, false, project.id);
     this.project = project;
 
     this.configure();
     this.renderContent();
   }
 
   configure() {}
 
   renderContent() {
     this.element.querySelector('h2')!.textContent = this.project.title;
     this.element.querySelector(
       'h3'
     )!.textContent = this.project.people.toString();
     this.element.querySelector('p')!.textContent = this.project.description;
   }
 }
 

const prjInput = new ProjectInput();
const activePrjList = new ProjectList('active');
const finishedPrjList = new ProjectList('finished');