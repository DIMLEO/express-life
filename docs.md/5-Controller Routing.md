## Route Filters

Instead of defining all of your route-level logic in a single routes.js file,
you may wish to organize this behavior using Controller classes.
Controllers can group related route logic into a Controller function.

Controllers are typically stored in the app/controllers directory, and this directory

Here is an example of a basic controller class:

```js
module.exports = function(){
    //Private params and function


    //public methods
    return {
		
    }
}();

```

#Exemple with user

first, we must add the route that points to the controllers into route.js file
simply add it to the object routes.controller

```js
routes.controller = {
		//...
        'user' : 'UserController',
		//...
    };
```

then creates the file (UserController.js) in the User Controller app/controllers folder
Next, just add methods to your controller, prefixed with the HTTP verb they respond to:
```js
module.exports = function(){
    //Private params and function

    //public methods
    return {
		// to enter the index with the GET method
		// user/
		get : function(){ return '';},
		
		// to enter the index with the GET method
		// user/
		all : function(){ return '';}
		
		//other example
		//user/Profils is avaible
		//user/profils is not avaible
		getProfils: function(){},
		
		postlogin: function(){},
		
		
    }	
}();

```

you can separate the method and path
```js

	//getProfils: function(){},
	//becomes
	'get Profils' : function(){},

```
as seen above, or you can add a filter to a controller
the filter will be added to all function of the controller
```js
'/user' :  {
				before : 'auth',
				uses: 'UserController'
			}
```

can also add individual filters in the controller
```js
module.exports = function(){
    //Private params and function

    //public methods
    return {
		deleteFolder : {
						 before : 'admin',
						 uses : function(){
							
							return 'done';
						 }
						}
    }	
}();

```
