Categories = function(){

	//$AbstractModel represents the Model class. make a extends of the Model class
	$AbstractModel.call(this);

	//Save the class name
	this.$tableName = "Categories";
	this.Chaine = function(callback){
		var r = new Chaine();

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
Categories.prototype = $Model["categories"].methods;

//Add relations prototype will be used to improve the ORM
Categories.prototype.$attrs = $Model["categories"].attrs;

//Add relations prototype will be used to improve the ORM
Categories.prototype.$extra = $Model["categories"].extra;

//Add validation prototype will be used to vaidate a form data Or others
Categories.prototype.$validation = $Model["categories"].validation;

//Creating an extension, it may be used generally
$Categories = new Categories();

