module.exports= {

    mode : "dev", /**** values : dev, prod ****/

    port: 8080,

    token : '_token',

    faveicon : "",

    /*
     * do not forget to change the port in the Host
     */
    host : 'http://localhost:8080',

    template : "Blade",

    bladeExtends : ['life.extends.js'],

    global : ['php.js', 'prototype.js', 'dependencies.js', 'helpers.js'],

    app: {
        name: "Express Life",
        version: "1.0.0"
        },

    //MULTILANGUAGE MANGER
    lang : {
        //if fromSession not empty it will be used to load the language package
        //if fromSession d'ont exist default will be used
        //if any pack exist you will be have a beauty error
        //if this.from is
        default: "en",
        fromSession : "",
        fromOther : ""//must be a function if required
    },

    //DATABASE CONNECTION PARAMS
    database: {
            default : "mysql",
            /*
             *
             * default : "mysql",
             *
             */
            connections : {
                mysql : {
                    createIfNotExist : true,
                    host : "127.0.0.1",
                    user: "root",
                    password:"",
                    name: "express_life",
                    port: "3306",
                    suffix : ""
                },
                sqlite : {
                    memory : true, /* boolean */
                    name :  'express_life', /* when memory is false name is required and is the database name*/
                    folder : __dirname + '/../../app/storage/database'
                },
                psql : {
                    createIfNotExist : true,
                    host : "127.0.0.1",
                    user: "postgres",
                    password:"root",
                    name: "express_life",
                    port: "6969",//5432
                    suffix : ""
                }
            }

        },

    //All PATH USED BY APPLICATION
    path : {
        modules                     :__dirname + '/../../node_modules',

        storage                     :__dirname + '/../../app/storage',

        views                       :__dirname + '/../../app/views',

        lang                        :__dirname + '/../../app/lang',

        required                    :__dirname + '/../../app/required',

        bladeExtends                :__dirname + '/../../app/required/blade.extends',

        glabal                      :__dirname + '/../../app/required/global',

        /*
         * chemain to the resources of the application is on the project folder
         * buy default is is the resources folder
         */
        resources                   :'resources',

        /*
         *Path to the folder containing all models
         */
        models                      :__dirname + '/../../app/models',

        root                        :__dirname + '/../..',

        app                         :__dirname + '/..'
    },

    /*
     |--------------------------------------------------------------------------
     | Authentification Settings
     | Password Reminder Settings
     |--------------------------------------------------------------------------
     |
     | The "expire" time is the number of minutes that the reminder should be
     | considered valid. This security feature keeps tokens short-lived so
     | they have less time to be guessed. You may change this as needed.
     |
     */
    auth : {
        model : 'User',

        table : 'user',

        login_colname : 'login',

        email_colname : 'email',

        password_colname : 'password',

        /*
         * authBy allows to know the columns that will be used to authenticate
         * login : login will be used only
         * email : mail is only used
         * login-email : whichever return the appropriate column will be used to perform authentication
         */
        authBy : 'login-email',

        reminder : {
            table : 'password_reminders',

            expire : 60
        }
    }
};
