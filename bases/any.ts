(() => {

  let avenger: any = 123;
  let power;

    avenger = 'Dr. Strange';
    console.log((avenger as string).charAt(0));

    avenger = 19.3434;
    console.log(<number>avenger.toFixed(2));
})()