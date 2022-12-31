(() => {

  const hero: [string, number, boolean] = ['Raven', 23, true];

  hero[0] = 'Aquaman';
  hero[1] = 24;
  hero[2] = false

  console.log({hero});
})()