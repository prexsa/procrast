const path = require('path');
const express = require('express');
const routes = require('./routes/routes.js');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = (process.env.PORT || 3090);
const app = express();

app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));

/*const indexPath = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, 'public'));

app.use('/public', publicPath);
app.get('/', function (_, res) { res.sendFile(indexPath) });*/

routes(app);


app.listen(port);
console.log(`Listening at http://localhost:${port}`);