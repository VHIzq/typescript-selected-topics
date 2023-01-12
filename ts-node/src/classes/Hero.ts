import powers from "../data/powers";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number,
    
  ) {

  }

  
  public get powers(): string {
    return powers.find(power => power.id === this.powerId)?.desc || 'not found';
  }
  
}

export class Villain {
  constructor(
    public name: string,
    public power: string
  ) {
    
  }
}

export const PI = 3.141592;