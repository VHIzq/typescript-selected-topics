(() => {

  let avengers: number = 10; 
  console.log(avengers);

  const villans: number = 20;

  if (avengers < villans) {
    console.log('Estamos en problemas Houston');
  } else {
    console.log('Hemos sido salvados');
  }

  avengers = Number('55A')
  console.log({avengers});


})()