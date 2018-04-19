
/**
 * Module dependencies.
 */

var express = require('express')
    , routes = require('./routes')
    , user = require('./routes/user')
    , http = require('http')
    , path = require('path');

var app = express();

// all environmentsvar express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var calhome = require('./routes/calhome');

var app = express();

// all environments
app.set('port', process.env.PORT || 3233);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' === app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', calhome.calhome);
/*
app.get('/', home.signin);*/
app.post('/addition', calhome.addition);
app.post('/substraction', calhome.substraction);
app.post('/multiplication',calhome.multiplication);
app.post('/division', calhome.division);
// app.get('/addition', calhome.addition);
// app.get('/substraction', calhome.substraction);
// app.get('/multiplication',calhome.multiplication);
// app.get('/division', calhome.division);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
