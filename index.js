const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ optionsSuccessStatus: 200 }));
app.use(express.static('public'));

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Sample API
app.get("/api/hello", (req, res) => {
  res.json({ greeting: 'hello API' });
});

//////////////////////////////////////////////////////////////////////////////////////////
app.get("/api", (req, res) => {
  const now = new Date();
  res.json({
    unix: now.getTime(),
    utc: now.toUTCString()
  });
});

app.get("/api/:date", (req, res) => {
  const input = req.params.date;
  
  const time =  Date(input)

console.log(time)
  res.json({
    unix: input,
    utc: time
  }); 
});

// Start server
const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port);
});
