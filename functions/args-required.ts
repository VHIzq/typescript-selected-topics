(() => {

  const fullName = (firtsName: string, lastName: string): string => {
    return ` ${firtsName} ${lastName} `;
  }

  const name = fullName('Rachel', 'Roth');

  console.log({name});

})()