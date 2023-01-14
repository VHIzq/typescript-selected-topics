(() => {

  interface Titan {
    name: string;
    realName: string;
    mutantPower(power: string): string;
  }
  
  interface Human {
    age: number;
  }

  class girlHero implements Titan, Human {
    public age: number;
    public name: string;
    public realName: string;

    mutantPower(power) {
      return `the ${this.name}'s power is ${power}`;
    }
  }

})()