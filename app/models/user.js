module.exports = {
    name: 'user',
    attrs : {
        fname           : {type : 'string', size : 50 , null : true },
        lname           : {type : 'string', size : 50 , null : true },
        aname           : {type : 'string', size : 50 , null : true ,note : 'Nom d\'artiste'},
        phone_number    : {type : 'string', size : 35 , null : false},
        email           : {type : 'string', size : 255, null : false},
        password        : {type : 'string', size : 255, null : false},
        remember_token  : {type : 'string', size : 255, null : true },

        pg_facebook     : {type : 'string', size : 255, null : true },
        pg_twitter      : {type : 'string', size : 255, null : true },
        pg_google_plus  : {type : 'string', size : 255, null : true },
        pg_wiki         : {type : 'string', size : 255, null : true },

        description     : {type : 'text'  , null : true},

        lyrics_api      : {type : 'string', size : 255, null : true },

        useas           : {type : 'int', null : true}
    },
    methods : {
        fullName: function(){
            return this.fname+' '+this.lname;
        }
    },
    exists : {
        recreate : false
    }

};