(() => {

  /* type Titan = {
    nick: string,
    name: string,
    activo: boolean,
    poder: string
  }

  const titans = {
    nick: 'Gar',
    name: 'Beast Boy',
    activo: true,
    poder: 'transformacion a animal'
  };

  const { name, poder } = titans

  console.log(name + ' ' + poder.toUpperCase());

  const printTitan = ({nick, ...rest}: Titan) => {
    console.log({...rest});
  }
  
  printTitan(titans); */

  const teenTitans: string[] = ['Raven', 'BB', 'Cyborg', 'Robin', 'Starfire'];

  const [Raven, BB, ] = teenTitans;

  console.log({Raven, BB});


})()