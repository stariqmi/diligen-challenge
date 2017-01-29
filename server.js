let express = require('express');
let bodyParser = require('body-parser');

let analyze = require('./analytics');

let port = process.env.PORT || 3000;

let app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/analytics', (req, res) => {
  console.log('===================== Incoming API Request ===========================');
  console.log('Request Type:  POST');
  console.log('Request Route: /analytics');
  console.log('Request Params: ' + JSON.stringify(req.body));
  console.log('======================================================================');

  let doc = req.body.doc;
  res.send(analyze(doc));
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log('Server running on port ' + port);
});
