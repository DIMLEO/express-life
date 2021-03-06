﻿# elife extends express

[![Build Status] [Alpha Release]]

NodeJs Web Framework  [node](http://nodejs.org).



## Commit && Push
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

## DBSM(Database Systeme manager) Exemple

```js
    //$dbsm is use to compile a database query
    $dbsm.sql({
		query : 'SELECT 25*25 as result',
		succes : function(rows, fields){
			//rows is array who contain all result
			//fields all fields name
			
			console.log('rows', rows);
			console.log('fields', fields);
		},
		error : function(err){
			throw err;
		}
	});
```

## Model Exemple

```js
	//if your models folder contain a user.js
	//your can use directly $User
	//or you can create a new instance of user
	//var myUser = new User();
	
    //Exemple with regexp
	var myUser = new User;
	
	//fname : /abc/ <==> fname LIKE '%abc%'
	//fname : /^abc/ <==> fname LIKE 'abc%'
	//fname : /abc$/ <==> fname LIKE '%abc'
	//fname : /^abc$/ <==> fname LIKE 'abc'
	myUser.where({lname : /abc/, fname : /abc/})
		  .get(function(){
				if(this.rowsCount() > 0){
					console.log(this.toJson()); //get current element as json
					//console.log(this.toJson(true)); //get all result as array containt who contain all rows
					//or
					/*
						this.each(function(index){
							this.toJson(); //get current row
						});
					*/
				}
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