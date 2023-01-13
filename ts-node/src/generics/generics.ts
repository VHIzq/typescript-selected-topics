export const printObject = (arg: unknown) => {
  console.log(arg);
};


export function genericFn<T>(arg:T) {
  return arg;
};


export const genericFNArrow = <T>(params: T) => params;




