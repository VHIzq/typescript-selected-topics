(() => {

  type Titan = {
    name: string;
    weapon: string;
  }

  const raven: Titan = {
    name: 'Rachel',
    weapon: 'psych powers'
  }
  
  const bb: Titan = {
    name: 'Garfield',
    weapon: 'transmutation'
  }
  
  const startfire: Titan = {
    name: 'Kary',
    weapon: 'alien powers'
  }

  const teenTitans: Titan[] = [raven, startfire, bb];

  for (const titan of teenTitans) {
    console.log(titan.name);
  }


})()