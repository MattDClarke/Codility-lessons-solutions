// Find the missing element in a given permutation.
// Problem description: https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
// Detected time complexity: O(N) or O(N * log(N))

function solution(A) {
    const ALen = A.length;
    const maxNum = ALen + 1;
    // the sum of consecutive integers from 1 to n is equal to n(n+1) / 2.
    const totalSum = maxNum * (maxNum + 1) / 2

    let partialSum = 0;
    for (let i = 0; i < ALen; i += 1) {
        partialSum += A[i];
    }
    return totalSum - partialSum;
}


