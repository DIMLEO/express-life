## Route Filters

Route filters provide a convenient way of limiting access to a given route,
which is useful for creating areas of your site which require authentication.
There are several filters included in the elife framework,
including an auth filter and a csrf filter.
These are located in the app/filters.js file.

## Defining A Route Filter
to add a filter, just add your filter in the Json object

```js
old : function(req,res, next){
		if($Input.get('age') > 200){
			res.redirect(url('/home'));
		}
	}
}
```

```js
module.exports = {

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
    },
	old : function(req,res, next){
		if($Input.get('age') > 200){
			res.redirect(url('/home'));
		}
	}
};
```

## Filter callback with parameter
default filters do not take parameters.
if you want to use asynchronous features in filters or use the functions of the object request or response object, then it is advisable to retrieve three parameters (request, response, next)

 * the next call allows the application has passed the next step
 * the next call is mandatory, in case it does not make the application will run in a loop


```js
	filter : function(req, res, next){
		asynchronous({...}, function(){
			//dont forget to call next
			next();
		});
	},
	....
```

## Attaching A Filter To A Route

```js
	routes.post = {
        '/bar': {
			before : 'old',
			uses: function () {
						return 'Hello Word!';
					}
		}
    };
```
## Attaching A Filter To A Controller Action
```js
	routes.controller = {
       '/user' :  {
					before : 'old',
					uses: 'controllerName'
				}
    };
```

## Attaching Multiple Filters To A Route
```js
	routes.controller = {
       '/user' :  {
					before : 'old,auth',
					uses: 'controllerName'
				}
    };
```
