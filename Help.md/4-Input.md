# Input

## Basic Input


You may access all user input with a few simple methods.

for intimate with php, the global GET variables ($_GET), FILES ($_FILES) and POST ($_POST) are used to retrieve user data


```js
	var name = $_GET.name;
	//OR 
	var name = //$_POST.name;
```
you can also use the global variable $ Input,
You do not need to worry about the HTTP verb used for the request,
as input is accessed in the same way for all verbs.

### Retrieving An Input Value
```js
	var name = $Input.get('name');
```

### Retrieving A Default Value If The Input Value Is Absent
```js
	var name = $Input.get('name', 'default');
```

### Determining If An Input Value Is Present
```js
	if($Input.has('name')){
		...
	}
```

### Getting All Input For The Request
```js
	var data = $Input.all();
```

### Getting Only Some Of The Request Input
```js
	var r = $Input.only('username', 'password');
```

#Files

### Retrieving An Uploaded File
```js
	var file = $Input.file('photo');
```

### Determining If A File Was Uploaded
```js
	if ($Input.hasFile('photo')){
		....
	}
```

### Determining If An Uploaded File Is Valid
```js
	if($Input.file('photo').isValid()){
     .....
	}
```

### Moving An Uploaded File
```js
	$Input.file('photo').move($destinationPath);

	$Input.file('photo').move($destinationPath, $fileName);
```

### Retrieving The Path To An Uploaded File
```js
	var rpath = $Input.file('photo').getRealPath();
```

### Retrieving The Original Name Of An Uploaded File
```js
	var clientName = $Input.file('photo').getClientOriginalName();
```

### Retrieving The Extension Of An Uploaded File
```js
	var extension = $Input.file('photo').getClientOriginalExtension();
```

### Retrieving The Size Of An Uploaded File
```js
	var size = $Input.file('photo').getSize();
```

### Retrieving The MIME Type Of An Uploaded File
```js
	$Input.file('photo').getMimeType();
```
