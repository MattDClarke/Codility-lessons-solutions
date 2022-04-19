// Calculate the values of counters after applying all alternating operations: increase counter by 1; set value of all counters to current maximum.
// Problem description: https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
// Detected complexity: O(N + M)

// see https://www.youtube.com/watch?v=H47iCG2YiA0 for solution outline
// for max counter operation - don't update all counter values at once -> can lead to time complexity of O(N2) in worst case
// when max counter operation occurs, shift position to increment from (start line). Initially 0
// after looping through array -> update any values that are behind the start line

function solution(N, A) {
  const ALen = A.length;
  let counterArr = Array(N).fill(0);
  // keep track of max val in counterArr
  let maxVal = 0;
  let startLine = 0;

  for (let i = 0; i < ALen; i += 1) {
    const elVal = A[i];
    if (1 <= elVal && elVal <= N) {
      // counterArr is zero indexed
      const counterArrIndex = elVal - 1;
      // if max counter operation occured-> start line shifts
      //   add 1 to new start line instead of 1 to prev value if start line has shifted due to max counter operation
      counterArr[counterArrIndex] = Math.max(
        counterArr[counterArrIndex] + 1,
        startLine + 1
      );
      if (counterArr[counterArrIndex] > maxVal) {
        maxVal = counterArr[counterArrIndex];
      }
      // given assumption: each el in A [1..N + 1]
    } else {
      startLine = maxVal;
    }
  }

  // move any values that are behind the start line
  // update any counters to startLine that we havent yet
  return counterArr.map((el) => Math.max(el, startLine));
}
