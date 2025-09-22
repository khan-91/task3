// const express = require('express');
// const app = express();

// function lcm(a, b) {
//     const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
//     return (a * b) / gcd(a, b);
// }

// const emailPath = 'tanveera915637_gmail_com';

// app.get(`/${emailPath}`, (req, res) => {
//     const x = Number(req.query.x);
//     const y = Number(req.query.y);

//     if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
//         res.type('text/plain'); // ensures plain text
//         return res.send('NaN');
//     }

//     res.type('text/plain'); // ensures plain text
//     res.send(lcm(x, y).toString());
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const emailPath = 'tanveera915637_gmail_com'; // your email with non-alphanumerics replaced by underscores

// Function to calculate GCD using BigInt
function gcd(a, b) {
  return b === 0n ? a : gcd(b, a % b);
}

// Function to calculate LCM using BigInt
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

app.get(`/${emailPath}`, (req, res) => {
  let x = req.query.x;
  let y = req.query.y;

  // Validate input: must be positive integers
  if (!/^\d+$/.test(x) || !/^\d+$/.test(y) || x === "0" || y === "0") {
    res.type('text/plain');
    return res.send('NaN');
  }

  // Convert to BigInt
  x = BigInt(x);
  y = BigInt(y);

  const result = lcm(x, y);
  res.type('text/plain'); // ensure plain string
  res.send(result.toString());
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/${emailPath}?x=12&y=18`);
});
