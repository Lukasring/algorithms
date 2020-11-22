/**
 *
 * @param number greater or equal to 0
 * @return number
 */

function factorial(number: number) {
  if (number < 0) {
    console.log("Number must be >= 0");
    return;
  }

  let result = 1;
  for (let i = 2; i <= number; i++) {
    result = result * i;
  }
  return result;
}

// console.log(factorial(5));
