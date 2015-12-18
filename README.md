# elife extends express

Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).

  [![NPM Version][npm-image]][npm-url]
  [![NPM Downloads][downloads-image]][downloads-url]
  [![Linux Build][travis-image]][travis-url]
  [![Windows Build][appveyor-image]][appveyor-url]
  [![Test Coverage][coveralls-image]][coveralls-url]



## Installation

```bash
$ npm install elife
```

## Configuration : app/bootstrap/app.js
```js
    mode : "dev", /**** values : dev, prod ****/

    port: 8080,

    /*
     * do not forget to change the port in the Host
     */
    host : 'http://localhost:8080',
    ....
```

## Routing : app/routes.js
```js
module.exports = function(View, Env, Filre){
    var routes = {};

    routes.get = {
        '/': function (req, res) {
            res.send(View.make('index.html'));
        }
    };

    routes.all = {
        '/test': function (req, res) {
            res.send(
                View.make('test.blade', {
                        lname : "DIARRA",
                        fname : "Mamdou"
                    })
            );
        }
    };
    ....
```

## Configuration : index.js
```js
var boot =  require('./app/bootstrap/boot');

//database creation and table is ready
$dbsm.ready(function(){

    console.log('Document Ready');

});
```js

## Features

  * Express Robust routing
  * Laravel Blade template
  * Blade esay extends
  * Laravel eloquent ORM
  * create database if not exists
  * create table of model required
  * auto-update table when model change
  * lang manager



## License

  [MIT](LICENSE)