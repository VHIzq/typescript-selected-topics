(() => {

  class Titan {
    constructor(
      public name: string,
      public realName: string,
    ) {
      console.log('Titan constructor called');
    }

    protected getFullName() {
      return `${this.name} ${this.realName} `
    }
  }

  class Xmen extends Titan {
    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
      ) {
        super(name, realName);
        //console.log('Constructor Xmen');
    }


    
    public get fullName() : string {
      return `${this.name} -  ${this.realName} `
    }

    
    public set fullName(name: string) {
      if (name.length < 3) {
        throw new Error('Ur name is not as cool as mine');
      }
      this.name = name;
    }
    
    
    

    getFullNameFromXmen() {
      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen('Wlverine', 'Logan', true);
  //wolverine.getFullNameFromXmen();
  
  wolverine.fullName = 'VHMI'
  /* console.log(wolverine.fullName); */
  
  /* const nuevoHeroe = new Titan('Xia', 'IA')
  nuevoHeroe.realName */

})()