// Find the maximal sum of any double slice.
// Problem description: https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/
// Detected complexity: O(N)

// For explanation see https://www.youtube.com/watch?v=Hu9-ScZzyCw

function solution(A) {
  const ALen = A.length;
  if (ALen < 3) return 0;

  let maxEndingLeftToRight = 0;
  var maxSliceSumsLeftToRight = Array(ALen).fill(0);

  let maxEndingRightToLeft = 0;
  var maxSliceSumsRightToLeft = Array(ALen).fill(0);

  // first and last indexes of array not included in sum
  for (let i = 1; i < ALen - 1; i++) {
    maxEndingLeftToRight = Math.max(0, maxEndingLeftToRight + A[i]);
    maxSliceSumsLeftToRight[i] = maxEndingLeftToRight;
  }

  // first and last indexes of array not included in sum
  for (let i = ALen - 2; i > 0; i--) {
    maxEndingRightToLeft = Math.max(0, maxEndingRightToLeft + A[i]);
    maxSliceSumsRightToLeft[i] = maxEndingRightToLeft;
  }

  // max double slice sum
  let maximum = 0;

  for (let i = 0; i < ALen - 2; i++) {
    maximum = Math.max(
      maximum,
      maxSliceSumsLeftToRight[i] + maxSliceSumsRightToLeft[i + 2]
    );
  }

  return maximum;
}
