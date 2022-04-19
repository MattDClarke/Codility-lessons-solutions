// Given a log of stock prices compute the maximum possible earning.
// Problem description: https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/
// Detected complexity: O(N)

function solution(A) {
  let currentMaxProfit = 0;
  let dayProfit = 0;
  // starting min price
  let minPrice = A[0];

  for (let dayPrice of A) {
    dayProfit = Math.max(0, dayPrice - minPrice);
    // set new min price after calculating dayProfit
    minPrice = Math.min(minPrice, dayPrice);
    currentMaxProfit = Math.max(dayProfit, currentMaxProfit);
  }
  return currentMaxProfit;
}
