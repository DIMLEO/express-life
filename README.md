# elife extends express

Fast, unopinionated, minimalist web framework for [node](http://nodejs.org).

## Commit && Push
	this is a draft project is a embryonic stage
	all changes or proposals are welcome

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
                              res.send('Hello Word'); 
                     }
        }
    };

    //Exmeple with all
    routes.all = {
        '/index': function (req, res) {
            //you must create the file index.blade in the views folder
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
```


## index.js
```js
var boot =  require('./app/bootstrap/boot');

boot.start(function(){

    //Application is ready
    //voulez vous executer un code ecrivez le ici
     console.log('Application is ready');

});
```

## Equivalence

    | ELife         |     PHP         |   Laravel  |   Express  |
    | ------------- |: -------------: | :---------:| ----------:|
    | $_POST        |        $_POST   |      -     |            |
    | $_GET         |        $_GET    |      -     |            |
    | $App          |        -        |      -     | express.app|
    | $Express      |        -        |      -     | express    |
    | $View         |        -        | View       |            |     
    | $_FILES       |        $_FILES  |      -     |            |
    | $_REQUEST     |        $_REQUEST|      -     |            |
    | $Session      |        -        | Session    |            |
    | $Hash         |        -        | Hash       |            |
    | $Auth         |        -        | Auth       |            |
    | $Input        |        -        | Input      |            |
    | $Validation   |        -        | Validation |            |


## php functions

  * pathinfo
  * var_dump
  * count
  * dateFormat
  * empty
  * is_bool
  * is_number
  * is_object
  * is_null
  * is_undefined
  * is_regexp
  * is_array
  * is_function
  * is_date
  * array_map
  * array_merge
  * array_keys
  * array_sum
  * in_array
  * range
  * time
  * strtotime
  * microtime
  * date
  * function_exists
  * rand
  * md5
  * sha1
  * utf8_decode
  * utf8_encode
  * mktime
  * basename
  
## php elife functions

  * array_int
  * object_merge -> array_merge
  * is_error
  
## EBlade standard

     | Laravel Blade              |     ELIFE Blade             |
     | ---------------------------| ----------------------------:
     | {{ var }}                  | ${ var }                    |
     | -                          | ${ var_dump(var) }          |
     | @extends('layouts.master') | @extends(layouts.master)    |
     | @section('sidebar')        | @section(sidebar)           |
     | @endsection                | @endsection                 |
     | @yield('content')          | @yield(content)             |
     | @yield('content')          | @yield(content)             |
     | @if                        | @if                         |
     | @elseif                    | @elseif                     |
     | @else                      | @else                       |
     | @endif                     | @endif                      |
     | @for                       | @for                        |
     | @endfor                    | @endfor                     |
     | @foreach                   | @foreach                    |
     | @endforeach                | @endforeach                 |
     | @while                     | @while                      |
     | @include("...")            | @include(....)              |
     | -                          | @bower(package)             |
     | @asset("...")              | @asset(...)                 |
     | @url("...")                | @url(...)                   |
     | -                          | @dateTime                   |
     
## bower

if bower is not install in your computer

```bash
	npm install bower
```
    
## Exemple with Angular
    
```bash
	cd <project path>
	bower install angular
```

and in the views you can write 

```html
	<html>
		<head>
		
		</head>
		<body>
		
		@bower(angular) <!-- write <script type = "text/javascript" src = "{{url to angular main js}}" ></script> -->
		</body>
	</html>
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