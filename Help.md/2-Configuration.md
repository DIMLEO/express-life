
## Configuration

Currently there is only one configuration file

app/bootstrap/app.js

Sometimes you may need to access configuration values at run-time. You may do so using a global variable $Environement

Exemple: 

```js
	console.log($Environement.port) // will return by default 8080
```

### Change the port

```js
	port : 8080, //change the value of port
	
    /**
     * do not forget to change the port in the Host
     **/
    host : 'http://localhost:8080',
    ....
```

### Change the application env with mode property

```js
    mode : "dev", /**** values : dev, prod ****/
	/*
	 * dev for devéloppement
	 * prod for production
	 */
	
	...
```


### add template extension
exemple if your extension name is exmple.js the values of bladeExtends property would be

```js

    bladeExtends : ['life.extends.js', 'exmple.js'],
	.....
	
```

### global
it serves to include files providing global function or to perform actions before launching the server
by default 
	* php.js  			included the usual functions of php
	* prototype.js		.....
	* dependencies.js	currently this file manages the database (creation of models, tables, etc ...)
	* helpers.js		contains functions

```js
global : ['php.js', 'prototype.js', 'dependencies.js', 'helpers.js'],
.....
```

### app
by default the app property contains : name and version property
you can remove or add your own property

```js

app: {
        name: "Express Life",
        version: "1.0.0"
        },
......
```

### lang 

```js
lang : {
        //if fromSession not empty it will be used to load the language package
        //if fromSession d'ont exist default will be used
        //if any pack exist you will be have a beauty error
        //if this.fromOther is
        default: "en",
        fromSession : "",
        fromOther : ""//must be a function if required
		
		//Exemple
		//fromOther : function(){ return 'fr';},
    },
	.......
```
//to get a sting with lang use $Lang
Exemple
```js
	$Lang.get('file', key);
	//file must be exists in /app/lang/{lang}/
	//key must be exists in file
```


### database 

change database default value to your driver
only SQLITE and MYSQL are supported
```js
database: {
		default : "",
		/*
		 *
		 * default : "mysql",
		 *
		 */

```
