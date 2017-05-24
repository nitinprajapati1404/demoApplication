/*
 * nodejs app.js environment -e=local
 * */
var argv = require('yargs')
        .command('environment', function (yargs) {
            yargs.options({
                location: {
                    demand: true,
                    alias: 'e',
                    type: 'string'
                }
            });
        })
        .help('help')
        .argv;
envFileName = argv.e;
require('dotenv').config({path: ".env." + envFileName});

//module.exports.start = function (done) {
var express = require('express');
var path = require('path');
global.app = express();
global.logger = require('morgan');
global.bodyParser = require('body-parser');
global.cors = require('cors');
global.router = express.Router();
global.Sequelize = require('sequelize');
var colors = require('colors');
var settings = require('./config/settings');
global._ = require('lodash');
global.helper = require('./app/helpers/_helpers');
global.validator = require('validator');
global.appMessage = require('./app/helpers/language/' + process.env.MSGLANG + ".msg.js");
var asyncLoop = require('node-async-loop');

/*
 * Add models in request 
 */
global.models = require('./app/models/');

app.use(logger('dev'));
//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.options(cors({origin: '*'}));
app.use(cors({origin: '*'}));

app.use(function (req, res, next) {
    res.header("Access-Control-Expose-Headers", "x-hgl-access-token");
    next();
});

/*Handle bad json*/
app.use(function (err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        console.error('Bad JSON');
        res.json({
            status: -1,
            message: 'Bad JSON'
        });
    }
});

/*
 * Add Routor
 */
require('./config/routes');
var http = require('http').Server(app);




models.sequelize.sync().then(function () {
    http.listen(settings.port, function () {
        console.log(("Listening on port " + settings.port).green);
    }).on('error', function (e) {
        if (e.code == 'EADDRINUSE') {
            console.log('Address in use. Is the server already running?'.red);
        }
    });
});
