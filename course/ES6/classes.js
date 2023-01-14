(() => {

  class Titan {
    constructor(name = 'no name', power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  const terra = new Titan('Terra', 6700);
  console.log(terra);

  class Evil extends Titan {
    
    constructor(name, power) {
      super(name, power);
      this.tricks = true;
    }
  }

  const Slader = new Evil('Slade', 11000);
  console.log(Slader);

})()