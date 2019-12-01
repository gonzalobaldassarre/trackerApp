
require('../models/User')
require('../models/Track');
const express = require('express');
const mongoose = require('mongoose');
const trackRoutes = require('../routes/trackRoutes');
const authRoutes = require('../routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');
// represnta nuestra aplicacion
const app = express();
const bodyParser = require('body-parser');
const monogoUri = 'mongodb+srv://admin:admin@cluster0-8xvjc.mongodb.net/test?retryWrites=true&w=majority';

// si cambia ip hay que ponerla en la whitelist 
// https://cloud.mongodb.com/v2/5ddfcd69c56c98420e50a87f#clusters/connect?clusterId=Cluster0

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

mongoose.connect(monogoUri, {
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('connected',  () => {
    console.log('connected to mongo');
});

mongoose.connection.on('error',  (err) => {
    console.error('Error connecting to mongo ', err);
});

app.get('/', requireAuth, (req, res) => {
    res.send(`Su email es ${req.user.email}`);
});

app.listen(3000, () => {
    console.log('Listening 3000');
});