//'use strict';

var express = require('express');
var app = express();

/*
 * for global use in the project
 */
$Express = express;

$App = app;

$Environement = {};

$Dim = undefined;

$View = {};

$Validation = {};

$Lang = {};

$Filters = {};

$Routes = {};

$dbsm = {};

$_GET = {};

$_POST = {};

$_FILES = {};

$_REQUEST = {};
//$COOKIE = {};

try {

    var env = require('./app.js');
    var dim = require('elife-dim')(env);

    $Environement = env;
    $Dim = dim;

    var bodyParser = require('body-parser');
    var multiparty = require('multiparty');

    //Serving static files with Express
    app.use(express.static(env.path.resources));

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(require('cookie-parser')());
    app.use(bodyParser.json());

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

    $View = dim[env.template];

    $Filters = require(env.path.app + '/filters.js');

    $Routes = require(env.path.app + '/routes.js')();

    $Lang = require(env.path.app + '/lang/lang.js');

    $Validation = require('mod-validator');

    //REWRITE THE MAKE FUNCTION
    $Validation.mk = $Validation.make;
    $Validation.mkLastLg = undefined;
    $Validation.make = function(rules, data){
        var v = $Validation.mk(rules, data);
        if($Validation.mkLastLg != $Lang.lang()) {
            $Validation.mkLastLg = $Lang.lang();
            v.mergeMessage($Lang.get('validator'));
        }
        return v;
    };

    //
    app.use(function(req, res, next){
        $_REQUEST = {};
        $_FILES = {};
        $_POST = {};
        $_GET = {};

        res.view = function(view, vars){
            res.send($View.make(view, vars));
        };

        if(req.method === 'GET'){
            $_GET = (req.query)?req.query:{};
            next();
        }
        else if(req.method === 'POST'){

            $_POST = (req.body)?req.body:{};

            var form = new multiparty.Form({uploadDir : $Environement.path.storage});

            form.parse(req, function(err, fields, files) {

                $_FILES = (files)?files:{};

                for(var i in fields){

                    if(is_array(fields[i]) && fields[i].length == 1) $_POST[i] = fields[i][0];

                    else $_POST[i] = fields[i];
                }

                next();
            });
        }
        $_REQUEST = req;
    });

    var type = ['get', 'post', 'delete', 'put', 'all'];

    for (var index in type) {
        var method = type[index];
        if ($Routes[method]) {
            var data = $Routes[method];

            for (var path in data) {
                app[method](path, data[path]);
            }
        }
    }

    if($Environement.faveicon){
        var favicon = require('serve-favicon');
        app.use(favicon($Environement.faveicon));
    }


}
catch(e){

    console.log('Express Life Erreur find');
    throw e;

}

var server = app.listen(env.port, function () {

    /*
     *
     * Faire tourner autre chose sur l'application
     *
     */

});
$Server = server;