const express = require('express');
const enrouten = require('express-enrouten');

const app = express();
const exphbs = require('express-handlebars');
const config = require('./config');

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));

const hbs = exphbs.create({
    extname: '.html',
    layoutsDir: 'views/layouts/',
    defaultLayout: 'base',
    partialsDir: ['views/modules/']
});

const mongoose = require("mongoose");
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
mongoose.connect('mongodb://127.0.0.1:32771/local');

app.use(session({
    secret: 'i need more beers',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

app.set('view engine', 'html');
app.engine('html', hbs.engine);

app.use(express.static('public'));
app.use(enrouten({ directory: 'routes' }));

app.get('/', (req, res) => {
    res.send('test');
});

app.listen(config.get('port'));