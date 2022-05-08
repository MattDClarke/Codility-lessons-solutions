// Calculate the number of elements of an array that are not divisors of each element.
// Problem description: https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_non_divisible/
// Detected complexity: O(N * log(N))

// count number of elements that are divisors to find number of elements that are non-divisors
// For explanation see https://www.martinkysel.com/codility-countnondivisible-solution/

function solution(A) {
  const ALen = A.length;
  const A_max = Math.max(...A);

  // hash: count of each number in array
  var count = {};
  for (let element of A) {
    if (!count[element]) {
      count[element] = 1;
    } else {
      count[element] += 1;
    }
  }

  // hash: set of divisors for each number in array
  var divisors = {};
  for (let element of A) {
    divisors[element] = new Set([1, element]);
  }

  // sieve of Eratosthenes - calculate divisors for all numbers in array
  let divisor = 2;
  while (divisor * divisor <= A_max) {
    let element_candidate = divisor;
    while (element_candidate <= A_max) {
      if (
        divisors[element_candidate] &&
        !divisors[element_candidate].has(divisor)
      ) {
        divisors[element_candidate].add(divisor);
        divisors[element_candidate].add(
          Math.floor(element_candidate / divisor)
        );
      }
      element_candidate += divisor;
    }
    divisor += 1;
  }

  var result = Array(ALen).fill(0);
  for (let [idx, element] of A.entries()) {
    // sum up count for each divisor
    let divisorsCount = 0;
    divisors[element].forEach((divisor) => {
      divisorsCount += count[divisor] || 0;
    });
    // number of non divisors for number at A[indx]
    result[idx] = ALen - divisorsCount;
  }
  return result;
}
