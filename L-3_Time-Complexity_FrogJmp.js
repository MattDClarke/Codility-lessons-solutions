// Count minimal number of jumps from position X to Y.
// Problem description: https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
// Detected time complexity: O(1)

function solution(X, Y, D) {
    return Math.ceil((Y - X) / D);
}



