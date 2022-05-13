// Count the number of passing cars on the road.
// Problem description: https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
// Detected complexity: O(N)

function solution(A) {
  const ALen = A.length;
  let pairCount = 0;
  let eastCarsCount = 0;

  for (let i = 0; i < ALen; i += 1) {
    if (A[i] === 0) {
      eastCarsCount += 1;
    } else {
      // for each east travelling car - there is an additional pair
      pairCount += eastCarsCount;
      if (pairCount > 1000000000) return -1;
    }
  }

  return pairCount;
}
