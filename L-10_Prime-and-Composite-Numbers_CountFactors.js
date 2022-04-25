// Count factors of given number n.
// Problem description: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/
// Detected complexity: O(sqrt(N))

// For explanation see https://www.youtube.com/watch?v=yzqO5dLn7pE

function solution(N) {
  let count = 0;
  //  Math.trunc(n ** 0.5) is the truncated square root of n
  for (let i = 0; i < Math.trunc(N ** 0.5) + 1; i++) {
    if (N % i === 0) {
      count++;
    }
  }

  // if n is a squared number - there is no pair for its square
  //   therefore - 1 (factor will 'combine with itself')
  if (N === Math.trunc(N ** 0.5) * Math.trunc(N ** 0.5)) {
    return count * 2 - 1;
  } else {
    return count * 2;
  }
}
