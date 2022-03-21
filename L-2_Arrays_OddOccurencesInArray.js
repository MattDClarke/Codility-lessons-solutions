// Find value that occurs in odd number of elements.
// Problem description: https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
// Detected time complexity: O(N) or O(N*log(N))

function solution(A) {
    var valsObj = {};
    for (let i = 0; i < A.length; i++){
        if (valsObj.hasOwnProperty(A[i])) {
            delete valsObj[A[i]];
        } else {
            valsObj[A[i]] = 1;
        }
    }
    // only unpaired val not deleted
    const unpaired = Object.keys(valsObj)[0];
    return parseInt(unpaired);
}
