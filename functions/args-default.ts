(() => {
  const fullName = (firtsName: string, lastName?: string, toUpper: boolean = false): string => {

    if (toUpper) {
      return ` ${firtsName}, ${lastName || '--'} `.toUpperCase();
    } else {
      return ` ${firtsName}, ${lastName || '--'} `.toLowerCase();
    }
  };

  const name = fullName('Rachel', 'Roth', true);

  console.log({ name });
})();
