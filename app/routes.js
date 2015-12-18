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
        '/welcome': function (req, res) {
            res.send(
                View.make('display/welcome.blade', {
                        lname : "DJON",
                        fname : "Doe",
                        title : 'Express Life'
                    })
            );
        }
    };

	// For the next version
    // routes.controller = {};


    return routes;
};