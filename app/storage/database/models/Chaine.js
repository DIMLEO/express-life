Chaine = function(){

	//$AbstractModel represents the Model class. make a extends of the Model class
	$AbstractModel.call(this);

	//Save the class name
	this.$tableName = "Chaine";
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

//Add relations prototype will be used to improve the ORM
Chaine.prototype.$relations = $Model["chaine"].relations;

//Add relations prototype will be used to improve the ORM
Chaine.prototype.$attrs = $Model["chaine"].attrs;

//Add relations prototype will be used to improve the ORM
Chaine.prototype.$extra = $Model["chaine"].extra;

//Add validation prototype will be used to vaidate a form data Or others
Chaine.prototype.$validation = $Model["chaine"].validation;

//Creating an extension, it may be used generally
$Chaine = new Chaine();

