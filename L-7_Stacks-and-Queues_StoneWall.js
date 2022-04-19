// Cover "Manhattan skyline" using the minimum number of rectangles.
// Problem description: https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
// Detected complexity: O(N)

// For explanation see
//   https://codesays.com/2014/solution-to-sigma-2012-stone-wall-by-codility/
//   https://codility.com/media/train/solution-stone-wall.pdf

function solution(H) {
  let stack = [];
  let stackLen = 0;
  let block_count = 0;
  for (const height of H) {
    while (stackLen !== 0 && height < stack[stackLen - 1]) {
      // If the height of current block is less than
      // the previous ones, the previous ones have
      // to end before current point. They have no
      // chance to exist in the remaining part.
      // So the previous blocks are completely finished.
      stack.pop();
      stackLen -= 1;
      block_count += 1;
    }
    if (stackLen === 0 || height > stack[stackLen - 1]) {
      // If the height of current block is greater than
      // the previous one, a new block is needed for
      // current position.
      stack.push(height);
      stackLen += 1;
    }
    // Else (the height of current block is same as that
    // of previous one), they should be combined to
    // one block -> no increase in block count.
  }

  // Some blocks with different heights are still in the stack.
  block_count += stackLen;
  return block_count;
}
