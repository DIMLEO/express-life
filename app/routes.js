module.exports = function(View, Env, Filre){
    var routes = {};

    routes.get = {
        '/': function (req, res) {
            res.send(View.make('index.html'));
        }
    };

    routes.post = {};

    routes.delete = {};

    routes.put = {};

    routes.all = {
        '/test' : function(req, res){
                res.send(var_dump(Env, View, req));
        },
        '/home': function (req, res) {

            res.send(View.make('dim.blade', {
                name : "DIARRA",
                prenom : "Mamdou",
                title : "Bienvenue sur Express Life",
                get : req.query
            }));
        }
    };

	// For the next version
    // routes.controller = {};


    return routes;
};