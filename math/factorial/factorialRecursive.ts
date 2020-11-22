function factorialRecursive(number: number) {
  if (number < 0)
    return console.log("Number must be greater than or equal to 0!");
  if (number === 1 || number === 0) return 1;
  return number * factorialRecursive(number - 1);
}

// console.log(factorialRecursive(0));
