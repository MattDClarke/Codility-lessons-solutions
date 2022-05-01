// Divide an array into the maximum number of same-sized blocks, each of which should contain an index P such that A[P - 1] < A[P] > A[P + 1].
// Problem description: https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/peaks/
// Detected complexity: O(N * log(log(N)))

// For explanation see - https://www.youtube.com/watch?v=ABLlJ7lGWQ8

function solution(A) {
  const ALen = A.length;
  var peaks = [];

  for (let i = 1; i < ALen - 1; i++) {
    if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
      peaks.push(i);
    }
  }

  const numPeaks = peaks.length;
  if (numPeaks === 0) return 0;

  // loop through all possible number of slices. From length === numPeaks to 1
  for (let i = numPeaks; i > 0; i--) {
    // If A can't be divided into i slices, try i - 1 slices
    if (ALen % i !== 0) {
      continue;
    }

    let sliceLen = Math.floor(ALen / i);
    // check that each slice contains a peak
    // slices list
    var slices = Array(i).fill(0);
    let sumOfPeaks = 0;

    // locating peak indexes in the slices
    for (let peakIndex of peaks) {
      // index position of peak in i slices of A
      const sliceId = Math.floor(peakIndex / sliceLen);
      // have not found any peaks for the particular sliceId (slice index)
      if (slices[sliceId] === 0) {
        slices[sliceId] = 1;
        sumOfPeaks++;
      }
      // if all slices contain a peak, sumOfPeaks === i
      if (sumOfPeaks === i) {
        return i;
      }
    }
  }

  return 0;
}
