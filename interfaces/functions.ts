(() => {

  interface AddTwoNumbers {
    (a: number, b: number): number;
  }

  let sumNumberFn: AddTwoNumbers;

  sumNumberFn = (a: number, b: number) => {
    return a + b;
  }

})()