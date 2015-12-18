module.exports = {
    asset   : function(path){
        return $Environement.host+'/'+path;
    },
    url : function(path){
        if(empty(path)) throw new Error('Please enter the link to the @url function');
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