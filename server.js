const path = require('path');
const express = require('express');
//const router = express.Router();
//const routes = require('./server/routes/routes.js');
const bodyParser = require('body-parser');
const cors = require('cors');

const HackerNews = require('./server/routes/hackernews.js');
const HacksMozilla = require('./server/routes/hacksmozilla.js');
const TechCrunch = require('./server/routes/techcrunch.js');

const port = (process.env.PORT || 3090);
const app = express();

app.use(cors());
app.use(bodyParser.json({ type: '*/*'}));

/*const indexPath = path.join(__dirname, 'index.html');
const publicPath = express.static(path.join(__dirname, 'public'));

app.use('/public', publicPath);
app.get('/', function (_, res) { res.sendFile(indexPath) });*/

app.use('/hackernews', HackerNews);
app.use('/hacksmozilla', HacksMozilla);
app.use('/techcrunch', TechCrunch);

//routes(app);


app.listen(port);
console.log(`Listening at http://localhost:${port}`);