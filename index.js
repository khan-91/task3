const express = require('express');
const app = express();

function lcm(a, b) {
    const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
    return (a * b) / gcd(a, b);
}

const emailPath = 'tanveera915637_gmail_com';

app.get(`/${emailPath}`, (req, res) => {
    const x = Number(req.query.x);
    const y = Number(req.query.y);

    if (!Number.isInteger(x) || !Number.isInteger(y) || x <= 0 || y <= 0) {
        res.type('text/plain'); // ensures plain text
        return res.send('NaN');
    }

    res.type('text/plain'); // ensures plain text
    res.send(lcm(x, y).toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
