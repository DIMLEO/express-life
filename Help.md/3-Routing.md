
# Routing

Most of the routes for your application will be defined in the app/routes.js file. The simplest ELife routes consist of a URI and a Closure callback.

```js
module.exports = function(View, Env, Filre){
    var routes = {};

	//a simple hello word
    routes.get = {
        '/': function () {
			return 'Hello Word!';
        }
    };

    routes.post = {};

    routes.delete = {};

    routes.put = {};

    routes.match = {
    };

    routes.all = {
        
    };

    routes.controller = {
        
    };

    return routes;
};
```

## req And res
Default a callback function must take two parameter (req, res)
req is request 
res is reponse
	
Exmple
```js
	'/' : function(req, res){
		res.send('Hello Word');
	}
```

if the function takes no parameters it must return a value
Exmple
```js
	'/' : function(req, res){
		return 'Hello word!!';
	}
```

## Basic GET Route
```js
    routes.get = {
        '/': function () {
			return 'Hello Word!';
        },
        '/foo': function () {
			return 'Foo Page Hello Word!!';
        }
    };
```


## Basic POST Route
```js
    routes.post = {
        '/bar': function () {
			return 'Hello Word!';
        },
        '/foo/bar': function () {
			return 'Foo Page Hello Word!!';
        }
    };
```

## registering A Route For Multiple Verbs

```js
    routes.match = {
		'post,get': {
			 '/' : function(){
					return 'Hello Word';
			 },
			 '/bar' : function(){
				return 'Foo Hello Word!!!';
			 }
		}
    };
```

## Registering A Route Responding To Any HTTP Verb

```js
    routes.all = {
        '/' : function(){
			return 'Hello word';
		}
    };
```


## Route Parameters is not implement for the moment