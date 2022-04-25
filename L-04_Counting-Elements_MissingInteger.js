// Find the smallest positive integer that does not occur in a given sequence.
// Problem description: https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
// Detected complexity: O(N) or O(N * log(N))

function solution(A) {
  const ALen = A.length;
  // create object to indicate integers presence
  const intCount = {};
  for (let i = 0; i < ALen; i += 1) {
    if (A[i] > 0) {
      intCount[A[i]] = A[i];
    }
  }

  // loop thro 1 to max integer input + 1
  for (let i = 1; i < 100002; i += 1) {
    if (!intCount[i]) return i;
  }
}
