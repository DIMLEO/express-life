
//Init Yout Application
var boot =  require('./app/bootstrap/boot');

//$dbsm ==> DataBase System Manager

$dbsm.ready(function () {

   $dbsm.sql({
       query : 'select 25 as nb',
       success : function(rows, fields){
            console.log('the fields ===> ',rows);
            console.log('the rows ===> ',rows);
       },
       error : function(err){
            console.log('something is wrong');
       }
   });

});

