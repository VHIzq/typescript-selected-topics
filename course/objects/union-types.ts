(() => {

  type Hero = {
    name: string,
    age?: number,
    powers: string[]
    getName?: () => string,
  }

  let myCustomVariable: (Hero | string | number) = 'Wixie';

  console.log(myCustomVariable);

  myCustomVariable = 20;
  typeof myCustomVariable // number

  myCustomVariable = 'Slade';
  typeof myCustomVariable // string

  myCustomVariable = {
    name: 'Bruce',
    age: 43,
    powers: ['Any']
  }

  console.log(typeof myCustomVariable); //* Object
  //*porque en Js no existe el typo Type y lo manda como objeto.

})()