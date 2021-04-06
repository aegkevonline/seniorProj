const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

var { gearConnect } = require('./util/microgear/gearConnect');

gearConnect();

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const userRoutes = require('./routes/user');
const errorController = require('./controllers/error');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use(errorController.get404);

app.listen(3001);