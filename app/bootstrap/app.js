module.exports= {

    mode : "dev", /**** values : dev, prod ****/

    port: 8080,

    /*
     * do not forget to change the port in the Host
     */
    host : 'http://localhost:8080',

    template : "Blade",

    bladeExtends : ['life.extends.js'],

    global : ['life.fn.js', 'prototype.js', 'dependencies.js'],

    app: {
        name: "Express Life",
        version: "1.0.0"
        },

    //DATABASE CONNECTION PARAMS
    database: {
            default : "mysql", //writer driver name like mysql, sqlite, psql
            /*
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

        app                         :__dirname + '/..'
    }
};
