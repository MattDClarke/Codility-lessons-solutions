// Find the index S such that the leaders of the sequences A[0], A[1], ..., A[S] and A[S + 1], A[S + 2], ..., A[N - 1] are the same.
// Problem description: https://app.codility.com/programmers/lessons/8-leader/equi_leader/
// Detected complexity: O(N)

function solution(A) {
  const ALen = A.length;
  const leaderThreshold = Math.floor(ALen / 2);
  // size of 'stack'
  size = 0;
  let value;

  for (let i = 0; i < ALen; i += 1) {
    if (size === 0) {
      size += 1;
      // value at bottom of the 'stack'
      value = A[i];
    } else {
      if (value !== A[i]) {
        size -= 1;
      } else {
        size += 1;
      }
    }
  }

  // candidate dominator
  let candidate = -1;
  // value still on stack - may be dominator
  if (size > 0) {
    candidate = value;
  }
  let count = 0;

  for (let i = 0; i < ALen; i += 1) {
    if (A[i] === candidate) {
      count += 1;
    }
  }

  if (count < leaderThreshold) {
    return 0;
  }

  let equiCount = 0;
  let countLeftSide = 0;

  for (let i = 0; i < ALen; i += 1) {
    // keep count of leaders to the left of the current index (including the current index)
    if (A[i] === candidate) {
      countLeftSide += 1;
    }
    // check for equi leader index
    // check if leader is leader on left side (including the current index)
    if (
      countLeftSide > Math.floor((i + 1) / 2) &&
      // check if leader is leader on right side
      count - countLeftSide > Math.floor((ALen - i - 1) / 2)
    ) {
      equiCount += 1;
    }
  }

  return equiCount;
}
