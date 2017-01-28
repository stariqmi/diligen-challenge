let express = require('express');
let bodyParser = require('body-parser');

let analytics = require('./analytics');

let app = express();
app.use(bodyParser.json());

app.post('/analytics', (req, res) => {
  let doc = req.body.doc;
  res.send({
    words: analytics.getWordFrequency(doc),
    pairs: analytics.getWordPairFrequency(doc)
  });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
