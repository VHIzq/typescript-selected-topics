(() => {

  abstract class Mutant {
    constructor(
      public name: string,
      public realName: string
    ) {}
  }

  class Xmen extends Mutant {
    saveWorld() {
      return 'World is saved';
    }
  }
  
  class Villain extends Mutant {
    conquerWorld() {
      return 'World is conquerested';
    }
  }

  const bb = new Xmen('Beast Boy', 'Garfield')
  //console.log( bb.saveWorld() );
  
  const bee = new Villain('bee', 'Kayle');
  //console.log(bee.conquerWorld());

  const printName = (character: Mutant) => {
    //console.log(character.realName)
  }

  printName(bb)

})()