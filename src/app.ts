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
   
   @autobind
   private submitHandler(event: Event) {
      event.preventDefault();
      console.log(this.titleInputElement.value);
   }
}

const prjInput = new ProjectInput();