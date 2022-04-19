// N voracious fish are moving along a river. Calculate how many fish are alive.
// Problem description: https://app.codility.com/programmers/lessons/7-stacks_and_queues/fish/
// Detected complexity: O(N)

function solution(A, B) {
  let ALen = A.length;
  let survivors = ALen;
  // add downstream moving fish to stack
  var stack = [];
  let stackLen = stack.length;

  for (let i = 0; i < ALen; i += 1) {
    if (B[i] === 1) {
      stack.push(A[i]);
      stackLen += 1;
    }
    if (B[i] === 0) {
      // if fish moving upstream, it may eat many of the downstream swimming fish on the stack
      while (stackLen > 0) {
        if (stack[stackLen - 1] < A[i]) {
          stack.pop();
          stackLen -= 1;
          survivors -= 1;
        } else {
          survivors -= 1;
          break;
        }
      }
    }
  }

  return survivors;
}
