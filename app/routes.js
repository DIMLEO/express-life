module.exports = function(View, Env, Filre){
    var routes = {};

    routes.get = {
        '/': function (req, res) {
            res.view('index.html');
        }
    };

    routes.post = {};

    routes.delete = {};

    routes.put = {};

    routes.all = {
        'github' : function(req, res){
            res.redirect('https://github.com/');
        },
		'welcome' : function(req, res){
			res.view('display/welcome.blade');
		}
    };

    routes.controller = {
        '/help' : 'HelpController'
    };


    return routes;
};