// Count the semiprime numbers in the given range [a..b]
// Problem description: https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_semiprimes/
// Detected complexity: O(N * log(log(N)) + M)

// For explanation see https://www.youtube.com/watch?v=I75k47yigd0

function solution(N, P, Q) {
  // array index = number
  var primesArr = [];
  var semiPrimesArr = [];
  for (let i = 2; i < N + 1; i++) {
    primesArr[i] = true;
    semiPrimesArr[i] = 0;
  }
  // 0 and 1 are not prime numbers
  primesArr[0] = primesArr[1] = false;
  semiPrimesArr[0] = semiPrimesArr[1] = 0;

  let i = 2;
  // Only need to remove (set to false) multiples of consecutive numbers <= sqrt of n
  while (i * i <= N) {
    // >>> if solution[i] - it is a prime number - others will be set to false
    if (primesArr[i]) {
      // e.g. If i = 3, only need to start removing multiples of i starting at 3 * 3 = 9
      //   because smaller numbers that are not prime numbers would already be removed
      let k = i * i;
      while (k <= N) {
        primesArr[k] = false;
        k += i;
      }
    }
    i++;
  }

  // calculate semi primes
  for (let i = 2; i < N + 1; i++) {
    for (let j = 0; j < N + 1; j++) {
      if (primesArr[i] && primesArr[j] && i * j <= N) {
        semiPrimesArr[i * j] = 1;
      }
      if (i * j > N) {
        break;
      }
    }
  }

  // cummulative count of semi primes
  var semiPrimesCount = Array(N + 1).fill(0);
  let count = 0;
  for (let i = 2; i < N + 1; i++) {
    if (semiPrimesArr[i]) {
      count++;
    }
    semiPrimesCount[i] = count;
  }

  var result = [];

  for (let i = 0; i < P.length; i++) {
    result.push(semiPrimesCount[Q[i]] - semiPrimesCount[P[i] - 1]);
  }

  return result;
}
