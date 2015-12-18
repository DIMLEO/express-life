//'use strict';

var express = require('express');
var app = express();

/*
 * for global use in the project
 */
$Express = express;
$App = app;
$Environement = undefined;
$Dim = undefined;

try {

    var env = require('./app.js');
    var dim = require('dim')(env);
    $Environement = env;
    $Dim = dim;

    //Serving static files with Express
    app.use(express.static(env.path.resources));

    if(env.template.toLowerCase() == 'blade'){
        var blade_extends = env.bladeExtends, global = env.global, extendsItem = undefined;

        for(var index in global){
            require(env.path.glabal+'/'+global[index]);
        }
        for(var index in blade_extends){
            extendsItem = require(env.path.bladeExtends+'/'+blade_extends[index]);

            for(var key in extendsItem)
                dim[env.template].extends(key, extendsItem[key]);
        }
    }


    var filters = require(env.path.app + '/filters.js');
    var routes = require(env.path.app + '/routes.js')(dim[env.template], env, filters);

    var type = ['get', 'post', 'delete', 'put', 'all'];
    for (var index in type) {
        var method = type[index];
        if (routes[method]) {
            var data = routes[method];

            for (var path in data) {
                app[method](path, data[path]);
            }
        }
    }


}catch(e){
    console.log('\x1b[31m-----------------------------------CAPTURE---------');
    throw e;
    console.log('-----------------------------------END OF CAPTURE-------\x1b[37m');
}

var server = app.listen(env.port, function () {

    /*
     * Faire tourner autre chose sur l'application
     */

});
$Server = server;