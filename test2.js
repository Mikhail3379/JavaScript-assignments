"use strict";

// there are a number of tiles on the floor , each numbered with a different non-negative integer.
// you are given an array of integers representing the tiles.
// you are initially standing on the first tile.
// each tile is the set represents your maximum jump length from that position.
// determine if you can reach the last tile.

function canReachEnd(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i > max) return false;
    max = Math.max(max, i + nums[i]);
  }
  return true;
}
canReachEnd([1,2,3]);
console.log(canReachEnd([1,2,3]));