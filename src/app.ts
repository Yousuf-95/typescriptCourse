import _ from 'lodash';

// TypeScript will throw an error for 'lodash' modules because it is written in pure JavaScript i.e. there is no TypeScript file in this module.
// This can be fixed by installing '@types/lodash'.s
console.log(_.shuffle([1,2,3,4,5,6,7,8,9,0]));

// This is used when there is a global variable declared in 'script' tag in HTML file and we need to tell TypeScript that this variable exists.
declare var MY_GLOBAL_VAR: string;
console.log(MY_GLOBAL_VAR);
