const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function maxProfit(n) {
  let maxEarnings = 0;
  let bestResult = { T: 0, P: 0, C: 0 };

  for (let t = 0; t <= Math.floor(n / 5); t++) {
    for (let p = 0; p <= Math.floor(n / 4); p++) {
      for (let c = 0; c <= Math.floor(n / 10); c++) {
        const totalTime = t * 5 + p * 4 + c * 10;
        if (totalTime > n) continue;

        let timeUsed = 0;
        let earnings = 0;

        for (let i = 0; i < t; i++) {
          timeUsed += 5;
          earnings += (n - timeUsed) * 1500;
        }

        for (let i = 0; i < p; i++) {
          timeUsed += 4;
          earnings += (n - timeUsed) * 1000;
        }

        for (let i = 0; i < c; i++) {
          timeUsed += 10;
          earnings += (n - timeUsed) * 2000;
        }

        if (earnings > maxEarnings) {
          maxEarnings = earnings;
          bestResult = { T: t, P: p, C: c };
        }
      }
    }
  }

  return { earnings: maxEarnings, result: bestResult };
}


rl.question("Enter time units: ", function (input) {
  const n = Number(input);

  const output = maxProfit(n);

  console.log("Max Earnings: $" + output.earnings);
  console.log(
    `T: ${output.result.T} P: ${output.result.P} C: ${output.result.C}`
  );

  rl.close();
});
