// Find the earliest time when a frog can jump to the other side of a river.
// Problem description: https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
// Detected time complexity: O(N)

function solution(X, A) {
  const ALen = A.length;
  const positions = new Set();
  // iterate through array A
  for (let i = 0; i < ALen; i += 1) {
    // add to Set - can only add numbers 1...X
    if (A[i] <= X) {
      positions.add(A[i]);
      if (positions.size === X) {
        return i;
      }
    }
  }
  return -1;
}
