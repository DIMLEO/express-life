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
        '/test': function (req, res) {
            res.send(
                View.make('test.blade', {
                        lname : "DIARRA",
                        fname : "Mamdou"
                    })
            );
        }
    };

	// For the next version
    // routes.controller = {};


    return routes;
};