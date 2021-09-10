const express = require('express');    //Include npm modules
const morgan = require('morgan');

var port = process.env.PORT || 80;    //Get port from .env (default to HTTP port 80)

const app = express();    //Create express.js app instance

app.set('view engine', 'ejs');
app.use(morgan('dev'));    //Use morgan to log HTTP requests
app.use('/public', express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log('Server running on port: ' + port);
});

app.get('/', (req, res) => {
    res.render('index');
});