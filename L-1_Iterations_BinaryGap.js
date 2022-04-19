// Find longest sequence of zeros in binary representation of an integer.
// Problem description: https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
// Detected time complexity: Performance not assessed for this exercise.

function solution(N) {
  // convert to binary - only works for + integers (assumed based on exercise instructions)
  const binaryN = N.toString(2);
  var reg = /10+1/g;
  var matches = [],
    found;
  while ((found = reg.exec(binaryN))) {
    matches.push(found[0]);
    reg.lastIndex -= found[0].split("1")[1].length;
  }
  if (matches.length === 0) return 0;
  const longestStr = matches.reduce(function (a, b) {
    return a.length > b.length ? a : b;
  });

  return longestStr.length - 2;
}
