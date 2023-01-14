import { isReturnStatement } from "typescript";

const printToConsole = (constructor: Function) => {
  console.log(constructor)
}

const printCondtionalConsole = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {}
  }
}

const blockPrototype = (constructor: Function) => {
  /* Object.seal(constructor)
  O
  
  bject.seal(constructor.prototype) */
}

const CheckValidPokemonId = () => {
  return function (target: unknown, propertyKey: string, descriptor: PropertyDescriptor) {
    
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      const isOutOfInRange = id < 1 || id > 800 
      if (isOutOfInRange) {
        return console.error('Id is out of range');
      } else {
        return originalMethod(id);
      }
        
      }


    //descriptor.value = ( ) => console.log('Hello Jupiter');
  }
}

const readonly = (isWritable: boolean = true): Function => {
  return function (target: unknown, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      
      get() {
        console.log(this);
        return 'VHMI'
      },
      set(this, val) {
        //console.log(this, val);

        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false
        })
      }
      
    }
    return descriptor;
  }
}



//@printToConsole
//@blockPrototype
//@printCondtionalConsole(true)
export class POkemon {

  @readonly(false)
  public publicApi!: string;
  constructor(public name: string) {
    this.setUpPokeApi();
  }

  setUpPokeApi() {
    this.publicApi = 'https://pokeapi.co';
  }


  @CheckValidPokemonId()
  savePokemonToDG(id: number) {
    console.log(`Pokemon ${id} saved on DB`);
  }
}
