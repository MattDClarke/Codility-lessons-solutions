// Find a maximum sum of a compact subsequence of array elements.
// Problem description: https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
// Detected complexity: O(N)

function solution(A) {
  // max ending at index i is equal to max ending at i - 1 plus element i
  let max_ending = 0;
  // minimum possible value of an element in A
  let max_slice = -2147483648;
  for (let a of A) {
    max_ending = Math.max(a, max_ending + a);
    max_slice = Math.max(max_slice, max_ending);
  }
  return max_slice;
}
