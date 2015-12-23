module.exports = {
    lang : function(){
        var conf = $Environement.lang.fromOther;
        if(conf) {
            if (is_function(conf)) {
                conf = conf();
            }
        }
        else if($Environement.lang.fromSession){
            //TODO Use ELIFE SESSION MODULES
            conf = $App.session($Environement.lang.fromSession);
        }
        else{
            conf = $Environement.lang.default
        }
        if(require('fs').existsSync('./'+conf)) return conf;

        return 'en';
    },
    get : function(pack, key){
        try {
            if (!key) return require('./' + this.lang() + '/' + pack);
            return require('./' + this.lang() + '/' + pack)[key];
        }catch(e){
            throw e;
        }
    },
    tr : function(str, data){
        for(var key in data){
            str = str.replace('%'+key+'%', data[0]);
        }
        return str;
    }
};