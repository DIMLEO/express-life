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
## Filter Classes

For advanced filtering, you may wish to use a class instead of a Closure. Since filter classes are resolved out of the application,
you can use the global variale $Filters
```js
```

```js
```