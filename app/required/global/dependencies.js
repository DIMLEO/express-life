/*
 * initialize the list of modules depends on the application
 * Attention it is recommended not to initiate a module that will be used only in a file
 * it is recommended to start with the global variable dollar
 *
 * Exemple
 *
 * $expess = require('express')
 *
 * $myModule = require('../MyModule')
 */

/*
 * in app/boostrap/app.js
 *
 * Change the configuration of the database according to your database management system
 *
 * Pour un simple test vous pouvez utiliser la base de donnée sqlite
 *
 * depending on your database management system given install the following packer with npm
 *
 * SQLITE
 * npm install sqlite3
 *
 * MYSQl
 * npm install mysql
 *
 * POSTGREYSQL
 * npm install pg
 *
 *
 *
 * MONGODB
 * MongoDB is not supported for now
 *
 * see
 * http://expressjs.com/en/guide/database-integration.html#postgres
 *
 */

/*
 * Load the module file list
 */

var fs = require('fs');

var modelsFileList = fs.readdirSync($Environement.path.models), modelLoadIsFileList = [];
/*
 * will be contain all models definition
 */

$Model = {};

/*
 *arger la définition de chaque module
 */
var item = undefined;

for(var index in modelsFileList){
    item = require($Environement.path.models+'/'+modelsFileList[index]);
    //console.log(item)
    if(item.name) $Model[item.name] = item;
    modelLoadIsFileList.push(item.name);
}

/*
 * Inclure le manager des requêtes vers les bases de données
 *
 * les models sont passé en paramètres pour effectuer leurs grèfé les différents options
 * et les rendre accèsible dans tout le projet
 */

$dbsm = require('elife-dim/database')($Environement.database, $Model);

var storage_models = fs.readdirSync($Environement.path.storage+'/database/models');

for(var i in storage_models){
    fs.unlink($Environement.path.storage+'/database/models/'+storage_models[i]);
}

for(var i in modelLoadIsFileList){
    var className = modelLoadIsFileList[i];
    if(!$Model[className].extra){
        $Model[className].extra = {
            soft_delete : true,
            idName : 'id',
            update_at : true,
            create_at : true
        };
    }
    className = className.ucfirst();
    fs.writeFileSync($Environement.path.storage+'/database/models/'+className+'.js', $ModelBuilder(className), "UTF-8");
    require($Environement.path.storage+'/database/models/'+className);
}

delete item;
delete modelsFileList;

//$DBSM.sql({
//    query : 'SELECT 25*25 as simple',
//    success: function(r){
//        console.log(r);
//    },
//    error : function(r){
//        console.log('erreur', r);
//    }
//}).tables(function(list){
//    console.log(list);
//});