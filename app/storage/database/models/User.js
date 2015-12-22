User = function(){

	//$AbstractModel represents the Model class. make a extends of the Model class
	$AbstractModel.call(this);

	//Save the class name
	this.$tableName = "User";
	this.Chaine = function(callback){
		var r = new Chaine();

		r.of(this).get(function(){
			if(callback){
				this.$callback = callback;
				this.$callback(r);
			}
		})
	}

	this.Followers = function(callback){
		var r = new Followers();

		r.of(this).get(function(){
			if(callback){
				this.$callback = callback;
				this.$callback(r);
			}
		})
	}

	
};

//The methods defined by default in the model his partner as a prototype,
//this will give a direct access from the objects
User.prototype = $Model["user"].methods;

//Add relations prototype will be used to improve the ORM
User.prototype.$attrs = $Model["user"].attrs;

//Add relations prototype will be used to improve the ORM
User.prototype.$extra = $Model["user"].extra;

//Add validation prototype will be used to vaidate a form data Or others
User.prototype.$validation = $Model["user"].validation;

//Creating an extension, it may be used generally
$User = new User();

