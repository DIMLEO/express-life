
# Configuration

ELife aims to make implementing authentication very simple.
In fact, almost everything is configured for you out of the box

The authentication configuration file is located at app/bootstrap/app.js

```js

    auth : {
		/*
		 * the first character is uppercase
		 */
        model : 'Users',

        table : 'users',

        login_colname : 'login',

        email_colname : 'email',

		/*
		 * min char: 60
		 * exemple: varchar(x) x >= 60
		 */
        password_colname : 'password',

        /*
         * authBy allows to know the columns that will be used to authenticate
         * login : login will be used only
         * email : mail is only used
         * login-email : whichever return the appropriate column will be used to perform authentication
         */
        authBy : 'login-email',

```

# Storing Passwords

The ELife Hash class provides secure (https://www.npmjs.com/package/password-hash) hashing: 

## Hashing A Password Using $Hash
```js

	var password = $Hash.make('secret');

```

## Verifying A Password Against A Hash
```js

	if ($Hash.check('secret', hashedPassword))
	{
		// The passwords match...
	}

```

#Authenticating Users

To log a user into your application, you may use the $Auth.attempt method.

```js

//BY USER AND PASSWORD
// depending on the configuration you can use email or login as user

$Auth.attempt({
	user : '', //the user
	password : '', // the password
	success : function(){ // if authentication happens with success
		
	},
	error : function(){ //if authentication happens with error
		
	}
});

// BY loginUsingId
$Auth.attempt({
	loginUsingId : 2,
	success : function(){
		
	},
	error : function(){
		
	}
});

// BY USER OBJECT

var user = new User();
user.where(id, 1).get(function(){
	
	$Auth.attempt({
		user : user,
		success: function(){
			
		},
		error : function(){
			
		}
	});

});

```

## Determining If A User Is Authenticated
To determine if the user is already logged into your application, you may use the check method:

```js
if ($Auth.check())
{
    // The user is logged in...
}
```

## Accessing The Logged In User
Once a user is authenticated, you may access the User model / record:

```js
	
	var email = $Auth.user().email;

```

To retrieve the authenticated user's ID, you may use the id method:

```js

	var id = Auth::id();

```

# Logging A User Out Of The Application

```js

	$Auth.logout();
	
```

# Protecting Routes

```js

	routes.get = {
		'profile' : {
			before : 'auth',
			uses : function(req, res){
				// Only authenticated users may enter...
				//exemple
				res.view('user/profile.blade');
			}
		}	
    };
	
```

