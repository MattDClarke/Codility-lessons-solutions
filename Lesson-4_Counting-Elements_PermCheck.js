// Check whether array A is a permutation.
// Problem description: https://app.codility.com/programmers/lessons/4-counting_elements/perm_check
// Detected time complexity: O(N) or O(N * log(N))

function solution(A) {
    // loop through A, create object: key = N, val = N
    // if object val already exists - duplicate N val -> return 0
    //  else return 1, outside of loop. if maxVal === ALen
    const ALen = A.length;
    const NCount = {};
    let maxVal = 0;
    for (let i = 0; i < ALen; i += 1) {
        const val = A[i];
        const count = NCount[val];
        // duplicate val in NCount
        if (count) {
            return 0;
        } else {
            if (val > maxVal) {
                maxVal = val;
            }
            NCount[val] = 1;
        }
    }
    // no duplicates. Check if max val as expected
    if (ALen === maxVal) {
        return 1;
    }
    return 0;
}


