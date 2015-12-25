# Views & Responses

## Basic Responses

Returning Strings From Routes 

Exemple 1:
```js
	'/' : function(){
		return 'Hello Word';
	}
```

Exemple 2 :
```js
	'/' : function(req, res){
		res.send('Hello Word');
	}
```

#Redirects
```js
	'/' : function(req, res){
		res.redirect('/home');
	}
```

# Views

Views typically contain the HTML of your application and provide a convenient way of separating your controller 
and domain logic from your presentation logic. Views are stored in the __app/views__ directory.

A simple view could look something like this:

```html
	<!-- View stored in app/views/hello.blade -->

	<html>
		<body>
			<h1>Hello ${ name }</h1>
		</body>
	</html>

```

This view may be returned to the browser like so:

```js
//Exemple 1 :
	'/' : function(req, res){
		
		res.send($View.make('hello.blade', { name : 'DJON DOE' }));
		
	}
//Exemple 2 :
	'/' : function(req, res){
		
		res.view('hello.blade', { name : 'DJON DOE' });
		
	}
// Exemple 3 :
	'/' : function(){
		
		return $View.make('hello.blade', { name : 'DJON DOE' });
		
	}
```

The second argument passed to View::make is an array of data that should be made available to the view.
