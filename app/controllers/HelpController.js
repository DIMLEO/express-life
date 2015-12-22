module.exports = function(){



    //Private params and function


    //public methods
    return {
        all :  function(req, res){
            res.view('display/help/index.blade', {
                title : "Express-life"
            });
        },
        allConf : function(req, res){
            res.view('display/help/conf.blade', {
                title : "Express-life"
            });
        },
        allGettingStarted : function(req, res){
            res.send('Hello Word')
        },
        allanatomy : function(req, res){

            res.view('display/help/anatomie.blade', {
                title : "Project Anatomie"
            });
        }
    }
}();