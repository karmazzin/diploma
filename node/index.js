const express = require('express');
const enrouten = require('express-enrouten');

const app = express();
const exphbs = require('express-handlebars');
const config = require('./config');

const hbs = exphbs.create({
    extname: '.html',
    layoutsDir: 'views/layouts/',
    defaultLayout: 'base',
    // Uses multiple partials dirs, templates in "shared/templates/" are shared
    // with the client-side of the app (see below).
    partialsDir: ['views/modules/']
});

app.set('view engine', 'html');
app.engine('html', hbs.engine);

app.use(express.static('public'));
app.use(enrouten({ directory: 'routes' }));

app.get('/', (req, res) => {
    res.send('test');
});

app.listen(config.get('port'));