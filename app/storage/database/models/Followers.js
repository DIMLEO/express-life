Followers = function(){

	//$AbstractModel represents the Model class. make a extends of the Model class
	$AbstractModel.call(this);

	//Save the class name
	this.$tableName = "Followers";
	
};

//Add relations prototype will be used to improve the ORM
Followers.prototype.$relations = $Model["followers"].relations;

//Add relations prototype will be used to improve the ORM
Followers.prototype.$attrs = $Model["followers"].attrs;

//Add relations prototype will be used to improve the ORM
Followers.prototype.$extra = $Model["followers"].extra;

//Add validation prototype will be used to vaidate a form data Or others
Followers.prototype.$validation = $Model["followers"].validation;

//Creating an extension, it may be used generally
$Followers = new Followers();

