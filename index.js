// index.js

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/api/hello", (req, res) => {
  res.json({ greeting: 'hello API' });
});

app.get("/api", (req, res) => {
  const now = new Date();
  res.json({
    unix: now.getTime(),
    utc: now.toUTCString()
  });
});

app.get("/api/:date", (req, res) => {
  const input = req.params.date;

  // Check if input is a number (likely Unix timestamp)
  let date = !isNaN(input) ? new Date(parseInt(input)) : new Date(input);

  // Handle invalid date
  if (date.toString() === "Invalid Date") {
    return res.json({ error: "Invalid Date" });
  }

  res.json({
    unix: date.getTime(),
    utc: date.toUTCString()
  });
});

// 🎧 Start server
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
