// Rotate an array to the right by a given number of steps.
// Problem description: https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
// Detected time complexity: Performance not assessed for this exercise.

function solution(A, K) {
  const ALen = A.length;
  let rotatedArr = [];
  A.forEach((el, i) => {
    const newIndex = (i + K) % ALen;
    rotatedArr[newIndex] = el;
  });

  return rotatedArr;
}
