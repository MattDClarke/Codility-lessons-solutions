// Determine whether a given string of parentheses (multiple types) is properly nested.
// Problem description: https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
// Detected complexity: O(N)

// Solution makes use of a stack to keep track of the opening brackets.

// Loop through string
//  If opening bracket - Add to stack
//  if closing bracket - compare to opening bracket on top of stack
//   opening and closing brackets match? pop last opening bracket off stack
//   opening and closing brackets do not match? return 0
// if stack empty after iterating through the string (all pairs found) - return 1
//   else return 0

function matchingPair(l, r) {
    if (l === '(' && r === ')') return true;
    if (l === '{' && r === '}') return true;
    if (l === '[' && r === ']') return true;
    return false;
}

function solution(S) {
    const SLen = S.length;
    if (SLen === 0) return 1;
    var stack = [];

    for (let char of S) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else {
            if (stack.length === 0) return 0;
            const lastOpeningBracket = stack.pop();
            if (!matchingPair(lastOpeningBracket, char)) return 0;
        }
    }

    // stack will be empty if all matching pairs found
    if (stack.length !== 0) return 0;
    return 1;
}