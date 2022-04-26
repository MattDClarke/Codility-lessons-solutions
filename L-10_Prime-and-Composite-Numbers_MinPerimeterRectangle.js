// Find the minimal perimeter of any rectangle whose area equals N.
// Problem description: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/
// Detected complexity: O(sqrt(N))

// As a rectangle becomes more square shaped, its perimeter decreases (provided area does not change)

function solution(N) {
  let largestFactor = 0;
  //  Math.trunc(n ** 0.5) is the truncated square root of n
  for (let i = 0; i < Math.trunc(N ** 0.5) + 1; i++) {
    if (N % i === 0) {
      largestFactor = i;
    }
  }

  const B = N / largestFactor;
  return 2 * (largestFactor + B);
}
