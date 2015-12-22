module.exports = function(View, Env, Filre){
    var routes = {};

    routes.get = {
        '/': function (req, res) {
            $Session.put('name', 'DIARRA', 3000);
            console.log('The Session values', $Session.all());
            setTimeout(function(){
                console.log('The Session Values after delay', $Session.all());
            }, 4000);
            res.view('index.html');
        }
    };

    routes.post = {};

    routes.delete = {};

    routes.put = {};

    routes.match = {
        'GET,POST,PUT,DELETE' : {
            '/foo' : function(req, res){
                res.send('Hello Word on Foo');
            }
        },
        'GET,POST' : {
            '/bar' : function(req, res){
                res.send('Hello Word on Bar');
            }
        }
    };

    routes.all = {
        '/github' : function(req, res){
            res.redirect('https://github.com/');
        },
        '/far' : {
            before : 'auth',
            uses : function(req, res){
                res.send('Hello Word on Far');
            }
        }
    };

    routes.controller = {
        '/help' :  'HelpController'
    };


    return routes;
};