// Compute number of distinct values in an array.
// Problem description: https://app.codility.com/programmers/lessons/6-sorting/distinct/
// Detected complexity: O(N*log(N)) or O(N)


function solution(A) {
    const ALen = A.length;
    if (ALen === 0) return 0;
    // can use A.sort((a, b) => a - b) if number order matters
    A.sort();
    let result = 1;
    for (let k = 1; k < ALen; k += 1) {
    if (A[k] != A[k - 1]) {
        result += 1;
        }
    }
    return result;
}

// alternative - better performance
function solution(A) {
    return new Set(A).size;
}