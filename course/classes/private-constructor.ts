(() => {

  class Titan {

    static instance: Titan;

    private constructor(public name: string) { }
    
    static callTerra(): Titan {
      if (!Titan.instance) {
        Titan.instance = new Titan('He Regresado como un cons privado Raven!');
      }
      return Titan.instance;
    }
  }

  //const terra = new Titan('Hi Beast Boy, my name is Terra');

  const terraGF = Titan.callTerra();
  const terraGF2 = Titan.callTerra();

  console.log(terraGF);
  console.log(terraGF2 );

})()