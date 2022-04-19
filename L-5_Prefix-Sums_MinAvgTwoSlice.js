// Find the minimal average of any slice containing at least two elements.
// Problem description: https://app.codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/
// Detected complexity: O(N)

// You only need to determine the min average for slices of size 2 or 3. For proof see https://codesays.com/2014/solution-to-min-avg-two-slice-by-codility/#comment-1238

function prefix_sums(A) {
  const ALen = A.length;
  const P = Array(ALen + 1).fill(0);

  for (let i = 1; i < ALen + 1; i += 1) {
    P[i] = P[i - 1] + A[i - 1];
  }
  return P;
}

function count_total(P, x, y) {
  return P[y + 1] - P[x];
}

function solution(A) {
  const maxArrayPos = A.length - 1;
  const maxStartPos2 = maxArrayPos - 1;
  const P = prefix_sums(A);
  let minAvgVal = (A[0] + A[1]) / 2;
  let minAvgStartPos = 0;

  for (let i = 0; i <= maxStartPos2; i += 1) {
    // get 2 slice avg
    const sliceAvg2 = count_total(P, i, i + 1) / 2;
    // or sliceAvg2 = (A[i] + A[i + 1]) / 2;
    // get 3 slice avg
    let sliceAvg3;
    // prevent array out of bounds error
    if (i + 2 <= maxArrayPos) {
      sliceAvg3 = count_total(P, i, i + 2) / 3;
      // or sliceAvg3 = (A[i] + A[i + 1] + A[i + 1] + A[i + 2]) / 3;
    }
    const newMinAvg = Math.min(
      sliceAvg2,
      sliceAvg3 === undefined ? 10001 : sliceAvg3
    );

    if (newMinAvg < minAvgVal) {
      minAvgVal = newMinAvg;
      minAvgStartPos = i;
    }
  }

  return minAvgStartPos;
}
