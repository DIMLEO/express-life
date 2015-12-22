module.exports = {
    bower : function(package){
        package = package.split(',');
        var vfiles = (package[1] && package[1].trim())?package[1].trim():'';
        package = package[0].trim();
        var fs = require('fs');
        var folder = JSON.parse(fs.readFileSync($Environement.path.root+'/.bowerrc', 'utf-8')).directory;
        if(fs.existsSync($Environement.path.root+'/'+folder+'/'+package+'/bower.json')){
            var files = require($Environement.path.root+'/'+folder+'/'+package+'/bower.json');
            folder = folder.replace(/^resources\//i, '');
            if(files){
                files = files.main;
                if(files){
                    if(is_string(files)){
                        files = files.replace(/^\.\//, '');
                        if(pathinfo(files, 'PATHINFO_EXTENSION').toLowerCase() ==  'js')
                            return '<script type = "text/javascript" src = "'+($Environement.host+'/'+folder+'/'+package+'/'+files)+'" ></script>';
                        else
                            return '<link rel = "stylesheet" href = "'+($Environement.host+'/'+folder+'/'+package+'/'+files)+'" />';
                    }else{
                        var source = '', file = undefined;
                        for(var index in files){
                            file = files[index];
                            file = file.replace(/^\.\//, '');
                            if(vfiles == undefined || vfiles.indexOf(file) != -1 || vfiles == 'all'){
                                console.log(file, pathinfo(file, 'PATHINFO_EXTENSION'))
                                if(pathinfo(file, 'PATHINFO_EXTENSION').toLowerCase() ==  'js')
                                    source += '<script type = "text/javascript" src = "'+($Environement.host+'/'+folder+'/'+package+'/'+file)+'" ></script>';
                                else
                                    source += '<link rel = "stylesheet" href = "'+($Environement.host+'/'+folder+'/'+package+'/'+file)+'" />';
                            }
                            if(vfiles == undefined) break;
                        }
                        return source;
                    }
                }else{
                    throw new Error('no main file in package '+package+' not found by bower');
                }
            }
        }else{
            throw new Error('package '+package+' not found by bower');
        }
    },
    asset   : function(path){
        return $Environement.host+'/'+path;
    },
    url : function(path){
        //if(empty(path)) throw new Error('Please enter the link to the @url function');
        return $Environement.host+'/'+path;
    },
    dateTime: function(format){
        var date = undefined;
        if(format.length == 0){
            format = "%Y-%m-%d %H:%M:%S";
            date = new Date();
        }
        else{
            format = format.split(',');
            if(format.length > 1) {
                date = new Date(format[0].trim());
                format = format[1].trim();
            }else{
                date = new Date();
                format = format[0].trim();
            }
        }
        return dateFormat(date, format, true);
    },
    form : {
        opener : function(attrs){
            return '<form '+attrs+' >';
        },
        closer : function(){
            return '</form>';
        }
    }
};