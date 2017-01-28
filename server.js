let express = require('express');
let bodyParser = require('body-parser');

let analytics = require('./analytics');

let app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/analytics', (req, res) => {
  let doc = req.body.doc;
  res.send({
    words: analytics.getWordFrequency(doc),
    pairs: analytics.getWordPairFrequency(doc)
  });
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
