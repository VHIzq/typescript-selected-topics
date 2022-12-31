(() => {
  const fullName = (firstName: string, ...args: string[]): string => {
    return `${firstName} ${args.join(' ')} `;
  };

  const superman = fullName('Clark', 'Joseph', 'Kent', 'Superman');

  console.log({ superman });
})();
