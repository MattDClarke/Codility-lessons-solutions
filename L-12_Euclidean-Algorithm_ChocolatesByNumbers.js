// There are N chocolates in a circle. Count the number of chocolates you will eat.
// Problem description: https://app.codility.com/programmers/lessons/12-euclidean_algorithm/chocolates_by_numbers/
// Detected complexity: O(log(N + M))

// For explanation see https://www.youtube.com/watch?v=ryYelurbcMk

function gcd(a, b, res) {
  if (a === b) {
    return res * a;
  } else if (a % 2 === 0 && b % 2 === 0) {
    return gcd(Math.floor(a / 2), Math.floor(b / 2), 2 * res);
  } else if (a % 2 === 0) {
    return gcd(Math.floor(a / 2), b, res);
  } else if (b % 2 === 0) {
    return gcd(a, Math.floor(b / 2), res);
  } else if (a > b) {
    return gcd(a - b, b, res);
  } else {
    return gcd(a, b - a, res);
  }
}

function lcm(a, b) {
  const numerator = a * b;
  return numerator / gcd(a, b, 1);
}

function solution(N, M) {
  return lcm(N, M) / M;
}
