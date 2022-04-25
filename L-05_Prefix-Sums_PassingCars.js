// Count the number of passing cars on the road.
// Problem description: https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
// Detected complexity: O(N)

function solution(A) {
  const ALen = A.length;
  let pairCount = 0;
  let lastEastIndex = 0;

  for (let i = 0; i < ALen; i += 1) {
    if (A[i] === 0) {
      lastEastIndex += 1;
    } else {
      // for each lastEastIndex - there is an additional pair
      pairCount += lastEastIndex;
      if (pairCount > 1000000000) return -1;
    }
  }

  return pairCount;
}
