(() => {

  class Titan {
    /* private name!: string;
    public team!: string;
    public realName!: string; */
    static age?: number = 23;
    public static getRealName() {
      return this.name;
    }

    constructor(
      private name: string,
      public team: string,
      public realName: string,
    ) { }
    
    bio() {
      return `${this.name} belongs to ${this.team} team `
    }

  }

  const kary: Titan = new Titan('starfire', 'teen titans','Kory Cors');
  //console.log(kary.bio());

 // console.log(Titan.age );
  
//  console.log(Titan.age);
  
  //console.log(Titan.getRealName());

})()