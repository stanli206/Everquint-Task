// function trapWater(height) {
//   let n = height.length;
//   let totalWater = 0;

//   for (let i = 0; i < n; i++) {
//     let leftMax = 0;
//     let rightMax = 0;

//     // left side max
//     for (let l = 0; l <= i; l++) {
//       leftMax = Math.max(leftMax, height[l]);
//     }

//     // right side max
//     for (let r = i; r < n; r++) {
//       rightMax = Math.max(rightMax, height[r]);
//     }

//     let waterAtI = Math.min(leftMax, rightMax) - height[i];

//     if (waterAtI > 0) {
//       totalWater += waterAtI;
//     }
//   }

//   return totalWater;
// }
