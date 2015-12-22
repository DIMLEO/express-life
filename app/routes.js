module.exports = function(View, Env, Filre){
    var routes = {};

    routes.get = {
        '/': function () {
			return 'Hello Word!';
        }
    };

    routes.post = {};

    routes.delete = {};

    routes.put = {};

    routes.match = {
    };

    routes.all = {
        
    };

    routes.controller = {
        
    };


    return routes;
};