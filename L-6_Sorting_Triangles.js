// Determine whether a triangle can be built from a given set of edges.
// Problem description: https://app.codility.com/programmers/lessons/6-sorting/triangle/
// Detected complexity: O(N*log(N))

// Once array sorted: P + R > Q and Q + R > P because R is the largest value
// Only need to check if P + Q > R
//  Check consecutive values

function solution(A) {
    const ALen = A.length;
    if (ALen < 3) return 0;

    A.sort((a, b) => a - b);

    for (let i = 0; i < ALen - 2; i += 1) {
        if (A[i] + A[i + 1] > A[i + 2]) {
            return 1;
        }
    }

    return 0;
}