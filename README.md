# elife extends express

Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).


# Getting Started

## Installation

```bash
    git clone https://github.com/DIMLEO/express-life.git <project name>
    cd <project name>
    npm install
```

## Configuration : app/bootstrap/app.js
```js
    mode : "dev", 
    /**
     * values : dev, prod
     * dev for devellepement 
     * pro for production mode 
     **/

    port: 8080,

    /**
     * do not forget to change the port in the Host
     **/
    host : 'http://localhost:8080',
    ....
```

## Routing : app/routes.js

```js
module.exports = function(View, Env, Filre){
    var routes = {};

    routes.get = {
        '/': function () {
            //The function returns a value if and only if it does not receive parameters
            return 'Hello Word';
        },
        'bar' : function(req, res){
            res.send('Hello Word');
        },
        
        //Exemple with filter
        '/foo' : {
            before : 'auth',
            uses : function(req, res){
                               
                     }
        }
    };

    //Exmeple with all
    routes.all = {
        '/index': function (req, res) {
            //you must create the file index.blade
            res.send(
                View.make('index.blade', {
                        lname : "ELIFE",
                        fname : "DIM"
                    })
            );
        }
    };
    
    //Exemple with controller
     routes.controller = {
        '/user' : 'UserController',
        //Exmple with controller and filter
        '/post' : {
            before : 'auth',
            uses : 'UserController'
         }
     } 
    .....
    
```

## Filter : app/filters.js
```js
    csrf : function(){
        if($Session.get('csrf') != $Input.get($Environement.token)){
            throw new Error('');
        }
    },
    auth : function(){
        if(!$Auth.check()) {

            throw new Error('Required Authentification');
            //or
            //res.redirect(url('/'));
        }
    }
    .....
```js


## index.js
```js
var boot =  require('./app/bootstrap/boot');

boot.start(function(){

    //Application is ready
    //voulez vous executer un code ecrivez le ici
     console.log('Application is ready');

});
```

## Features

  * Express Robust routing
  * filters
  * Controllers
  * EBlade inspired Blade Laravel
  * Blade esay extends
  * Laravel eloquent ORM For MYSQL and SQLITE
  * create database if not exists
  * Create tables that are required for the models, associative tables also create tables
  * Aside automatic update tables when the exchange models
  * language management for internationalization



## License

  [MIT](LICENSE)