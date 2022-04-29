// Find the maximum number of flags that can be set on mountain peaks.
// Problem description: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/
// Detected complexity: O(N)

// For explanation see https://www.youtube.com/watch?v=6KK2eglhvdQ and https://codility.com/media/train/solution-flags.pdf

function solution(A) {
  const ALen = A.length;
  if (ALen < 3) {
    return 0;
  }
  var peaks = [];

  // find the peaks
  for (let i = 1; i < ALen - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  const peaksLen = peaks.length;
  if (peaksLen === 0) return 0;
  if (peaksLen === 1) return 1;

  const maxNumFlagsPossible = Math.trunc(Math.sqrt(ALen));
  const maxFlags = Math.min(maxNumFlagsPossible, peaksLen);

  // at least 1 flag can be set at this point
  let numFlagsSet = 1;
  let maximum = 0;

  for (let i = maxFlags + 1; i > 0; i--) {
    // lastFlagIndex will only increase when another peak is found that is far enough away
    let lastFlagIndex = 0;
    numFlagsSet = 1;
    // checking all peaks - excl. first peak
    for (let j = 1; j < peaksLen; j++) {
      if (peaks[j] - peaks[lastFlagIndex] >= i && numFlagsSet < i) {
        numFlagsSet++;
        lastFlagIndex = j;
      }
    }

    if (numFlagsSet < maximum) {
      return maximum;
    } else if (maximum < numFlagsSet) {
      maximum = numFlagsSet;
    }
  }
  return maximum;
}
