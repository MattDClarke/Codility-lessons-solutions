// Find an index of an array such that its value occurs at more than half of indices in the array.
// Problem description: https://app.codility.com/programmers/lessons/8-leader/dominator/
// Detected complexity: O(N*log(N)) or O(N)

// For explanation see https://codility.com/media/train/6-Leader.pdf


function solution(A) {
    const ALen = A.length;
    const dominatorThreshold = Math.floor(ALen / 2);
    // size of 'stack'
    size = 0;
    let value;

    for (let i = 0; i < ALen; i += 1) {
        if (size === 0) {
        size += 1;
        // value at bottom of the 'stack'
        value = A[i];
        } else {
            if (value !== A[i]) {
                size -= 1;
            } else {
                size += 1;
            }
        }
    }

    // candidate dominator
    let candidate = -1;
    // value still on stack - may be dominator
    if (size > 0) {
        candidate = value;
    }
    let dominatorIndex = -1;
    let lastCandidateIndex = -1;
    let count = 0;

    for (let i = 0; i < ALen; i += 1) {
        if (A[i] === candidate) {
            count += 1;
            lastCandidateIndex = i;
        }
    }

    if (count > dominatorThreshold) {
        dominatorIndex = lastCandidateIndex;
    }

    return dominatorIndex;
}