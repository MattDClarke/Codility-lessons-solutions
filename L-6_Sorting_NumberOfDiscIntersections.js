// Compute the number of intersections in a sequence of discs.
// Problem description: https://app.codility.com/programmers/lessons/6-sorting/number_of_disc_intersections/
// Detected complexity: O(N*log(N)) or O(N)

// For explanation see http://www.lucainvernizzi.net/blog/2014/11/21/codility-beta-challenge-number-of-disc-intersections/


function solution(A) {
    const ALen = A.length;
    // an event is a disk start point or end point
    let events = [];
    // for each disc, label its start point(+1) and end point (-1)
    // (x value, start or end point flag)
    for (let i = 0; i < ALen; i += 1) {
      events.push([i - A[i], 1], [i + A[i], -1]);
    }


    // sort by start point / end point value: a[0]
    // if point value is the same, make start point first
    events.sort((a, b) => {
      if (a[0] - b[0] < 0) {
        return -1;
      }
      if (a[0] - b[0] > 0) {
        return 1;
      }
      // a[0] and b[0] are equal
      if (b[1] === 1) {
        return 1
      };
      return -1;
    });


    // active_circles = how thick set of discs is at each event (start or end point)
    let intersections = 0;
    let active_circles = 0;
    // circle_count_delta = flag indicating start or end of disc
    for (const [_, circle_count_delta] of events) {
      // only increase intersection count if start point reached
      // new start point means new intersections. Only active circles can intersect with the new start point
      intersections += active_circles * (circle_count_delta > 0 ? 1 : 0);
      active_circles += circle_count_delta;
      if (intersections > 10000000) {
        return -1;
      }
    }

    return intersections;

  }