(() => {

  const hero: string = 'Flash';

  function returnName(): string {
    return hero;
  }

  const activarBatiseñal = (): string => {
    return 'batiseñal activada';
  }

  console.log(typeof activarBatiseñal);

  const heroName = returnName();

  console.log(heroName);

})()