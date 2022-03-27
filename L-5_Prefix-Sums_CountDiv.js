// Compute number of integers divisible by k in range [a..b].
// Problem description: https://app.codility.com/programmers/lessons/5-prefix_sums/count_div/
// Detected complexity: O(1)

// Explanation: see comment from Rachel in https://codesays.com/2014/solution-to-count-div-by-codility/

function solution(A, B, K) {
     if (A % K === 0) return Math.floor((B - A) / K) + 1;
     return Math.floor((B - (A - A % K)) / K);
}