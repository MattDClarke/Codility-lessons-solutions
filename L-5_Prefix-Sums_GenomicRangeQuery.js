// Find the minimal nucleotide from a range of sequence DNA.
// Problem description: https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
// Detected complexity: O(N + M)


function solution(S, P, Q) {
    const PLen = P.length;
    let results = [];

    for (let i = 0; i < PLen; i += 1) {
        let positionsToCheck = S.substring(P[i], Q[i] + 1);
        // Check if 'A' is in range
        if (positionsToCheck.indexOf('A') !== -1) {
            results[i] = 1;
            // skip to next for loop iteration
            // smallest impact factor letter found, no need to check further
            continue;
        }
        if (positionsToCheck.indexOf('C') !== -1) {
            results[i] = 2;
            continue;
        }
        if (positionsToCheck.indexOf('G') !== -1) {
            results[i] = 3;
            continue;
        }
        // must be 'T'
        results[i] = 4;
    }

    return results;
}
