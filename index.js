const express = require('express');
const app = express();
const port = process.env.port || 3001;

app.set('view engine', 'ejs');
app.set('views', 'views');

const server = require('http').Server(app);
server.listen(port);

app.get('/', (req, res) => {
    res.render('home');
});