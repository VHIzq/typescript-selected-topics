"use strict";
(() => {
    const addNumbers = (a, b) => a = b;
    const greet = (name) => `Hi ${name} `;
    const saveTheWorld = () => 'Salva a la porrista, salva al mundo';
    //*let myFunction: Function;
    //*let myFunction: number;
    //*let myFunction: (x: number, y: number) => number;
    //*let myFunction: (name: string) => string;
    let myFunction;
    /* myFunction = 10;
    console.log(myFunction); */
    /* myFunction = addNumbers;
    console.log(myFunction(1,3)); */
    /* myFunction = greet;
    console.log(myFunction('Raven')); */
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
