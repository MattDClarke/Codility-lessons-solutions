// Minimize the value |(A[0] + ... + A[P-1]) - (A[P] + ... + A[N-1])|.
// Problem description: https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium
// Detected time complexity: O(N)

// only 1 loop through array - time complexity = O(n)

function calcSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function solution(A) {
    const ALen = A.length;
    const PLen = A.length - 1;
    let leftSum = A[0];
    let rightSum = calcSum(A) - A[0];
    let rawDifference = rightSum - leftSum;
    let difference = Math.abs(rawDifference);

    // for P = 1 to P = N-1
    for (let P = 1; P < PLen; P += 1) {
        rawDifference = rawDifference - (2 * A[P]);
        //    when move one index higher in array:
        //      rightSum = rightSum + current el val
        //      leftSum = leftSum = current el val
        //      raw difference = raw difference (prev) - 2 * curr el value
        //      https://www.youtube.com/watch?v=oM6b_WeJjQ0
        // if abs(rawDifference) is less than difference
        // - update difference
        if (Math.abs(rawDifference) < difference) {
            difference = Math.abs(rawDifference);
        }
    }

    return difference;

}