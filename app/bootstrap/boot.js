//'use strict';

var express = require('express');
var app = express();

/*
 * for global use in the project
 */
BaseController = undefined;

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

$ExpressSESSION = {};

try {

    var env = require('./app.js');
    var dim = require('elife-dim')(env);

    $Environement = env;
    $Dim = dim;

    var bodyParser = require('body-parser');
    var multiparty = require('multiparty');
    var session = require('express-session')

    //Serving static files with Express
    app.use(express.static(env.path.resources));

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(require('cookie-parser')());
    app.use(bodyParser.json());

    //Générérate a uid unique
    var sess = {
        secret: 'keyboard cat',
        saveUninitialized: true,
        genid: function(req) {
            return sha1(md5(microtime())+sha1(md5(rand(1, 999999999)))) // use UUIDs for session IDs
        },
        resave: false,
        cookie: {}
    };
    if($App.mode == 'prod'){
        app.set('trust proxy', 1) // trust first proxy
        sess.cookie.secure = true // serve secure cookies
    }
    app.use(session(sess));

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

    $Filters = require(env.path.app + '/filters');

    $Routes = require(env.path.app + '/routes')();

    $Lang = require(env.path.app + '/lang/lang');

    $Validation = require('mod-validator');

    //REWRITE THE MAKE FUNCTION
    $Validation.mk = $Validation.make;
    $Validation.mkLastLg = undefined;
    $Validation.make = function(rules, data){
        var v = $Validation.mk(data, rules);
        if($Validation.mkLastLg != $Lang.lang()) {
            $Validation.mkLastLg = $Lang.lang();
            v.mergeMessage($Lang.get('validator'));
        }
        return v;
    };

    //
    app.use(function(req, res, next){
        var session = {};

        session.store = {};
        session.expires = {};
        session.id = req.sessionID;;

        $ExpressSESSION = req.session;
        $ExpressSESSION.session = session;

        //console.log($ExpressSESSION);
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

    var type = ['get', 'post', 'delete', 'put', 'all', 'controller'];

    //Remake $Routes with  match value
    var match = $Routes.match;
    for(var methods in match){
        var m = methods.split(',');
        m = array_map(function(r){
            return r.trim().toLowerCase();
        }, m);

        var routes = match[methods];
        for(var i in m){
            var method = m[i];
            if(!$Routes[method]) $Routes[method] = {};
            for(var val in routes){
                $Routes[method][val] = routes[val];
            }
        }
    }


    var cur = undefined;
    for (var index in type) {
        var method = type[index];
        if(type.indexOf(method) == -1) continue;
        if ($Routes[method]) {
            var data = $Routes[method];
            if(method != 'controller'){
                for (var path in data){
                    if(!(/^\//).test(path)) pathx = '/'+path;
                    cur = data[path];
                    if(is_object(cur)) app[method](path, get_filters(cur.before), get_real_function(cur.uses));
                    else app[method](path, get_real_function(cur));
                }
            }
            else{
                for(var preffix in data){
                    var cur = data[preffix];
                    var controller = cur, before = '';
                    if(is_object(cur)){
                        controller = cur.uses;
                        before = get_filters(cur.before);
                    }
                    var pathx = undefined, callback = undefined, methods = require(env.path.app + '/controllers/'+controller);

                    for(var path in methods){
                        if(/^get/.test(path)) method = 'get';
                        else if(/^post/.test(path)) method = 'post';
                        else if(/^delete/.test(path)) method = 'delete';
                        else if(/^put/.test(path)) method = 'put';
                        else if(/^all/.test(path)) method = 'all';

                        var reg = new RegExp('^'+method, 'i');
                        pathx = preffix+'/'+path.replace(reg, '');
                        if(!(/^\//).test(pathx)) pathx = '/'+pathx;

                        if(method != 'controller'){
                            cur = methods[path];
                            callback = undefined;
                            if (type.indexOf(method) != -1){
                                if(is_object(cur)) {
                                    if(before){
                                        callback = before;
                                        callback = array_merge(callback, get_filters(cur.before));
                                    }
                                    else callback = $Filters[cur.before];
                                    app[method](pathx, callback , get_real_function(cur.uses));
                                }
                                else{
                                    if(before)
                                        app[method](pathx, before, get_real_function(cur));
                                    else
                                        app[method](pathx, get_real_function(cur));
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //
    if($Environement.faveicon){
        var favicon = require('serve-favicon');
        app.use(favicon($Environement.faveicon));
    }

    exports.start = function(callback){
        //if database systeme manager exists
        if($dbsm.ready) $dbsm.ready(callback);
        else if(callback) callback();
    };

}
catch(e){

    console.log('Express Life Erreur find');
    throw e;

}

$Server = server;

var server = app.listen(env.port, function () {

    process.on('uncaughtException', function(err) {

        console.error(err.stack);

    });

    /*
     *
     * Faire tourner autre chose sur l'application
     *
     */
});