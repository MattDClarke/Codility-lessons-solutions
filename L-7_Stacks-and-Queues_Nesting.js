// Determine whether a given string of parentheses (single type) is properly nested.
// Problem description: https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/
// Detected complexity: O(N)


// Almost the same as L7 - Brackets, but does not need a stack.

function solution(S) {
    let leftBrackets = 0;

    for (let char of S) {
        if (char === '(') {
            leftBrackets += 1;
        } else {
            if (leftBrackets === 0) return 0;
            leftBrackets -= 1;
        }
    }

    return leftBrackets === 0 ? 1 : 0;
}