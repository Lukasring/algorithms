/**
 *
 * @param n elements in fibonacci sequence
 * @return number[]
 */

function fibonacci(n: number) {
  if (n <= 0) return console.log("Number must be greater than 0!");
  if (n === 1) return [0];
  const fibSequence = [0, 1];

  for (let i = 2; i < n; i++) {
    fibSequence.push(fibSequence[i - 2] + fibSequence[i - 1]);
  }
  return fibSequence;
}

// console.log(fibonacci(10));
