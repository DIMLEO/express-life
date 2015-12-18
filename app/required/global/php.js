Type = require('type-of-is');


pathinfo = function(path, options) {
    //  discuss at: http://phpjs.org/functions/pathinfo/
    // original by: Nate
    //  revised by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // improved by: Brett Zamir (http://brett-zamir.me)
    //    input by: Timo
    //        note: Inspired by actual PHP source: php5-5.2.6/ext/standard/string.c line #1559
    //        note: The way the bitwise arguments are handled allows for greater flexibility
    //        note: & compatability. We might even standardize this code and use a similar approach for
    //        note: other bitwise PHP functions
    //        note: php.js tries very hard to stay away from a core.js file with global dependencies, because we like
    //        note: that you can just take a couple of functions and be on your way.
    //        note: But by way we implemented this function, if you want you can still declare the PATHINFO_*
    //        note: yourself, and then you can use: pathinfo('/www/index.html', PATHINFO_BASENAME | PATHINFO_EXTENSION);
    //        note: which makes it fully compliant with PHP syntax.
    //  depends on: basename
    //   example 1: pathinfo('/www/htdocs/index.html', 1);
    //   returns 1: '/www/htdocs'
    //   example 2: pathinfo('/www/htdocs/index.html', 'PATHINFO_BASENAME');
    //   returns 2: 'index.html'
    //   example 3: pathinfo('/www/htdocs/index.html', 'PATHINFO_EXTENSION');
    //   returns 3: 'html'
    //   example 4: pathinfo('/www/htdocs/index.html', 'PATHINFO_FILENAME');
    //   returns 4: 'index'
    //   example 5: pathinfo('/www/htdocs/index.html', 2 | 4);
    //   returns 5: {basename: 'index.html', extension: 'html'}
    //   example 6: pathinfo('/www/htdocs/index.html', 'PATHINFO_ALL');
    //   returns 6: {dirname: '/www/htdocs', basename: 'index.html', extension: 'html', filename: 'index'}
    //   example 7: pathinfo('/www/htdocs/index.html');
    //   returns 7: {dirname: '/www/htdocs', basename: 'index.html', extension: 'html', filename: 'index'}

    var opt = '',
        optName = '',
        optTemp = 0,
        tmp_arr = {},
        cnt = 0,
        i = 0;
    var have_basename = false,
        have_extension = false,
        have_filename = false;

    // Input defaulting & sanitation
    if (!path) {
        return false;
    }
    if (!options) {
        options = 'PATHINFO_ALL';
    }

    // Initialize binary arguments. Both the string & integer (constant) input is
    // allowed
    var OPTS = {
        'PATHINFO_DIRNAME': 1,
        'PATHINFO_BASENAME': 2,
        'PATHINFO_EXTENSION': 4,
        'PATHINFO_FILENAME': 8,
        'PATHINFO_ALL': 0
    };
    // PATHINFO_ALL sums up all previously defined PATHINFOs (could just pre-calculate)
    for (optName in OPTS) {
        OPTS.PATHINFO_ALL = OPTS.PATHINFO_ALL | OPTS[optName];
    }
    if (typeof options !== 'number') { // Allow for a single string or an array of string flags
        options = [].concat(options);
        for (i = 0; i < options.length; i++) {
            // Resolve string input to bitwise e.g. 'PATHINFO_EXTENSION' becomes 4
            if (OPTS[options[i]]) {
                optTemp = optTemp | OPTS[options[i]];
            }
        }
        options = optTemp;
    }

    // Internal Functions
    var __getExt = function(path) {
        var str = path + '';
        var dotP = str.lastIndexOf('.') + 1;
        return !dotP ? false : dotP !== str.length ? str.substr(dotP) : '';
    };

    // Gather path infos
    if (options & OPTS.PATHINFO_DIRNAME) {
        var dirName = path.replace(/\\/g, '/')
            .replace(/\/[^\/]*\/?$/, ''); // dirname
        tmp_arr.dirname = dirName === path ? '.' : dirName;
    }

    if (options & OPTS.PATHINFO_BASENAME) {
        if (false === have_basename) {
            have_basename = this.basename(path);
        }
        tmp_arr.basename = have_basename;
    }

    if (options & OPTS.PATHINFO_EXTENSION) {
        if (false === have_basename) {
            have_basename = this.basename(path);
        }
        if (false === have_extension) {
            have_extension = __getExt(have_basename);
        }
        if (false !== have_extension) {
            tmp_arr.extension = have_extension;
        }
    }

    if (options & OPTS.PATHINFO_FILENAME) {
        if (false === have_basename) {
            have_basename = this.basename(path);
        }
        if (false === have_extension) {
            have_extension = __getExt(have_basename);
        }
        if (false === have_filename) {
            have_filename = have_basename.slice(0, have_basename.length - (have_extension ? have_extension.length + 1 :
                have_extension === false ? 0 : 1));
        }

        tmp_arr.filename = have_filename;
    }

    // If array contains only 1 element: return string
    cnt = 0;
    for (opt in tmp_arr) {
        cnt++;
    }
    if (cnt == 1) {
        return tmp_arr[opt];
    }

    // Return full-blown array
    return tmp_arr;
}


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

object_merge = function(target, source){
    /*
     *
     * Merges two (or more) objects,
     * giving the last one precedence
     *
     */
    if ( typeof target !== 'object' ) {
        target = {};
    }
    for (var property in source) {
        if ( source.hasOwnProperty(property) ) {
            var sourceProperty = source[ property ];
            if ( typeof sourceProperty === 'object' ) {
                target[ property ] = object_merge( target[ property ], sourceProperty );
                continue;
            }
            target[ property ] = sourceProperty;
        }
    }
    for (var a = 2, l = arguments.length; a < l; a++) {
        merge(target, arguments[a]);
    }
    return target;
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
