// Check whether two numbers have the same prime divisors.
// Problem description: https://app.codility.com/programmers/lessons/12-euclidean_algorithm/common_prime_divisors/
// Detected complexity: O(Z * log(max(A) + max(B))**2)

// For explanation see https://www.martinkysel.com/codility-commonprimedivisors-solution/

function gcd(p, q) {
  if (q == 0) return p;
  else return gcd(q, p % q);
}

function sameFactors(p, q) {
  if (p === q) return true;
  let denominator = gcd(p, q);

  function checkValue(n) {
    while (n != 1) {
      let tmp = gcd(n, denominator);

      if (tmp === 1) return false;
      n /= tmp;
    }
    return true;
  }

  return checkValue(p) && checkValue(q);
}

function solution(A, B) {
  let count = 0;

  for (let i = 0; i < A.length; i++) {
    if (sameFactors(A[i], B[i])) {
      count++;
    }
  }
  return count;
}
