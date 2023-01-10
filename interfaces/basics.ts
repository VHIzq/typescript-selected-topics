(() => {

  interface Hero  {
    name: string,
    age?: number,
    powers: string[]
    getName?: () => string,
  }

  
  let raven: Hero = {

    name: 'Raven',
    age: 24,
    powers: ['Psycho powers', 'Telekinesys', 'Transdimensional transport'],
    getName() {
      return this.name;
    }
  };
  
  let beastBoy: Hero = {

    name: 'beastBoy',
    age: 24,
    powers: ['Psycho powers', 'Telekinesys', 'Transdimensional transport'],
    getName() {
      return this.name;
    },
  };

  


})()