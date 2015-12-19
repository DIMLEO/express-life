module.exports = function(){



    //Private params and function


    //public methods
    return {
        all : function(req, res){
            res.view('display/help/index.blade', {
                title : "Express-life"
            });
        },
        allGettingStarted : function(req, res){
            res.send('Hello Word')
        }
    }
}();