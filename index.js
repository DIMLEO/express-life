
var boot =  require('./app/bootstrap/boot');

//if database systeme manager exists
if($dbsm.ready){
    $dbsm.ready(function(){

        console.log('Database is Ready');

    });
}