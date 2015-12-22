
if(!function_exists('path_storage')){
    path_storage = function(){
        return $Environement.path.storage;
    };
}

if(!function_exists('path_root')){
    path_storage = function(){
        return $Environement.path.root;
    };
}

if(!function_exists('path_app')){
    path_storage = function(){
        return $Environement.path.app;
    };
}

if(!function_exists('path_models')){
    path_storage = function(){
        return $Environement.path.models;
    };
}

if(!function_exists('path_resources')){
    path_storage = function(){
        return $Environement.path.resources;
    };
}

if(!function_exists('path_glabal')){
    path_storage = function(){
        return $Environement.path.glabal;
    };
}

if(!function_exists('path_lang')){
    path_storage = function(){
        return $Environement.path.lang;
    };
}

if(!function_exists('path_views')){
    path_storage = function(){
        return $Environement.path.views;
    };
}

if(!function_exists('path_modules')){
    path_storage = function(){
        return $Environement.path.modules;
    };
}

if(!function_exists('csrf_token')){
    csrf_token = function(){

    };
}

if(!function_exists('url')){
    url = function(path){
        return $Environement.host+'/'+path;
    };
}
if(!function_exists('get_real_function')){
    get_real_function = function(fnc){
        if(fnc.length >= 2) return fnc;
        return function(req, res, next){res.send(fnc()); };
    };
}
if(!function_exists('get_filters')){
    get_filters = function(filters){
        var vfilters = [];
        if(is_string(filters)) {
            filters = filters.split(',');
            filters = array_map(function (r) {
                return r.trim();
            }, filters);
        }

        for(var i in filters) {
            if($Filters[filters[i]].length == 3){
                vfilters.push($Filters[filters[i]]);
            }
            else {
                vfilters.push(function (req, res, next) {
                    $Filters[filters[i]]();
                    next();
                });
            }
        }

        return vfilters;
    };
}