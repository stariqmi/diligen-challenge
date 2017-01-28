let express = require('express');
let bodyParser = require('body-parser');

let analytics = require('./analytics');

let port = process.env.PORT || 3000;

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

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
