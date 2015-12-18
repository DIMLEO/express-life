Type = require('type-of-is');

//EQUIVALENT OF PHP is_string
count = function(v){
    if(is_array(v)) return v.length;
    else if(is_number(v)) return (''+v).length;

    var c = 0;
    for(var i in v) c++;
    return c;
};

/*
 * FROM http://stackoverflow.com/questions/10645994/node-js-how-to-format-a-date-string-in-utc
 */
dateFormat = function(date, fstr, utc) {
    utc = utc ? 'getUTC' : 'get';
    return fstr.replace (/%[YmdHMS]/g, function (m) {
        switch (m) {
            case '%Y': return date[utc + 'FullYear'] (); // no leading zeros required
            case '%m': m = 1 + date[utc + 'Month'] (); break;
            case '%d': m = date[utc + 'Date'] (); break;
            case '%H': m = date[utc + 'Hours'] (); break;
            case '%M': m = date[utc + 'Minutes'] (); break;
            case '%S': m = date[utc + 'Seconds'] (); break;
            default: return m.slice (1); // unknown code, remove %
        }
        // add leading zero if required
        return ('0' + m).slice (-2);
    });
};

empty = function(r){
    if(typeof r == 'object') return count(r) == 0;
    else if (is_string(r)) r.length == 0;
    return false;
};

array_int = function(a){
    var v = true;
    for(var i in a){
        if(!is_number(a[i])){
            v = false;
            break;
        }
    }
    return v;
};

//POST = function(req){
//    var qs = require('querystring');
//    var body = "";
//    req.on('data', function (data) {
//        body += data;
//
//        // Too much POST data, kill the connection!
//        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
//        if (body.length > 1e6)
//            req.connection.destroy();
//    });
//    var post = {};
//    req.on('end', function () {
//        post = qs.parse(body);
//        // use post['blah'], etc.
//        console.log(post);
//    });
//    return post;
//};

var_dump = function(){
    var util = require('util');
    return '<div class = "express-life-vardump" >'+util.inspect(arguments)+'<div>';
};

is_string = function(variable){
    return Type.string(variable) == 'String';
};

is_bool = function(variable){
    return Type.string(variable) == 'Boolean';
};

is_number = function(variable){
    return Type.string(variable) == 'Number';
};

is_object = function(variable){
    return Type.string(variable) == 'Object';
};

is_null = function(variable){
    return Type.string(variable) == 'Null';
};

is_undefined = function(variable){
    return Type.string(variable) == 'Undefined';
};

is_regexp = function(variable){
    return Type.string(variable) == 'RegExp';
};

is_array = function(variable){
    return Type.string(variable) == 'Array';
};

is_function = function(variable){
    return Type.string(variable) == 'Function';
};

is_date = function(variable){
    return Type.string(variable) == 'Date';
};

is_error = function(variable){
    return Type.string(variable) == 'Error';
};
