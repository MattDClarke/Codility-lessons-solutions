// Maximize A[P] * A[Q] * A[R] for any triplet (P, Q, R).
// Problem description: https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
// Detected complexity: O(N * log(N))

function solution(A) {
  ALen = A.length;
  A.sort((a, b) => a - b);
  // check product of largest numbers
  // and also product of 2 largest negatives and largest positive
  return Math.max(
    A[ALen - 1] * A[ALen - 2] * A[ALen - 3],
    A[0] * A[1] * A[ALen - 1]
  );
}

/// O(N) solution - no sorting needed - from https://danwritescode.com/codility-max-product-of-three-100-on-solution-lesson-6/

function solution(A) {
  const ALen = A.length;

  if (ALen === 3) {
    return A[0] * A[1] * A[2];
  }

  let min1, min2, max1, max2, max3;
  min1 = min2 = 1001;
  max1 = max2 = max3 = -1001;

  for (let i = 0; i < ALen; i++) {
    if (A[i] > max1) {
      max3 = max2;
      max2 = max1;
      max1 = A[i];
    } else if (A[i] > max2) {
      max3 = max2;
      max2 = A[i];
    } else if (A[i] > max3) {
      max3 = A[i];
    }

    if (A[i] < min1) {
      min2 = min1;
      min1 = A[i];
    } else if (A[i] < min2) {
      min2 = A[i];
    }
  }

  prod1 = max1 * max2 * max3;
  prod2 = max1 * min1 * min2;

  if (prod1 > prod2) {
    return prod1;
  } else {
    return prod2;
  }
}
