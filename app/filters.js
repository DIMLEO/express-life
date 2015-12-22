module.exports = {

    csrf : function(){
        if($Session.get('csrf') != $Input.get($Environement.token)){
            throw new Error('');
        }
    },
    auth : function(){
        if(!$Auth.check()) {

            throw new Error('Required Authentification');
            //or
            //res.redirect(url('/'));
        }
    }
};