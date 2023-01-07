"use strict";
(() => {
    /* type Titan = {
      nick: string,
      name: string,
      activo: boolean,
      poder: string
    }
  
    const titans = {
      nick: 'Gar',
      name: 'Beast Boy',
      activo: true,
      poder: 'transformacion a animal'
    };
  
    const { name, poder } = titans
  
    console.log(name + ' ' + poder.toUpperCase());
  
    const printTitan = ({nick, ...rest}: Titan) => {
      console.log({...rest});
    }
    
    printTitan(titans); */
    const teenTitans = ['Raven', 'BB', 'Cyborg', 'Robin', 'Starfire'];
    const [Raven, BB,] = teenTitans;
    console.log({ Raven, BB });
})();
(() => {
    const raven = {
        name: 'Rachel',
        weapon: 'psych powers'
    };
    const bb = {
        name: 'Garfield',
        weapon: 'transmutation'
    };
    const startfire = {
        name: 'Kary',
        weapon: 'alien powers'
    };
    const teenTitans = [raven, startfire, bb];
    for (const titan of teenTitans) {
        console.log(titan.name);
    }
})();
(() => {
    const nombre = 'Rachel Roth';
    const getName = (p) => p;
    getName(nombre);
})();
