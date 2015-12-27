module.exports = {

    csrf : function(){
        if($Session.get('csrf') != $Input.get($Environement.token)){
            throw new Error('');
        }
    },
    auth : function(req, res, next){
         if($Auth.guest()){
            if($Request.ajax()){
                hs401('Authentication is required for this action');
            }else{
                res.redirect('/login');
            }
        }
        next();
    }
};