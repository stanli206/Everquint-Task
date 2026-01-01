import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateEarnings(n, T, P, C) {
  let timeUsed = 0;
  let earnings = 0;


  for (let i = 0; i < C; i++) {
    timeUsed += 10;
    earnings += (n - timeUsed) * 2000;
  }
  for (let i = 0; i < T; i++) {
    timeUsed += 5;
    earnings += (n - timeUsed) * 1500;
  }
  for (let i = 0; i < P; i++) {
    timeUsed += 4;
    earnings += (n - timeUsed) * 1000;
  }

  return earnings;
}

function maxProfit(n) {
  let maxEarnings = -Infinity;
  let candidates = [];

  for (let t = 0; t <= Math.floor(n / 5); t++) {
    for (let p = 0; p <= Math.floor(n / 4); p++) {
      for (let c = 0; c <= Math.floor(n / 10); c++) {
        const totalTime = t * 5 + p * 4 + c * 10;
        if (totalTime > n) continue;

        const earnings = calculateEarnings(n, t, p, c);

        if (earnings > maxEarnings) {
          maxEarnings = earnings;
          candidates = [{ T: t, P: p, C: c, totalTime }];
        } else if (earnings === maxEarnings) {
          candidates.push({ T: t, P: p, C: c, totalTime });
        }
      }
    }
  }

  const results = candidates
    .filter((c) => c.totalTime < n)
    .map(({ T, P, C }) => ({ T, P, C }));

  return { earnings: maxEarnings, results };
}

rl.question("Enter time units: ", (input) => {
  const n = Number(input);
  const output = maxProfit(n);

  console.log(`Earnings: $${output.earnings}`);
  console.log("Solutions:");
  output.results.forEach((r) => console.log(`T: ${r.T}  P: ${r.P}  C: ${r.C}`));

  rl.close();
});
