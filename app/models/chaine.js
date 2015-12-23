module.exports = {
    name : 'chaine',
    attrs: {
        lib : {type : 'string', size: 255, null : false},
        description : {type : 'text'},
        icon : {type : 'string', null : true},
        flag : {type : 'string', null : true, note : 'flag est l\'image en grand, le bandeau facon facebook'},
        publiciter : {type :'bool'},
        droitAuteur : {type : 'text'}
    },
    validation : {
        create : {
            lib  : 'required|min'
        }
    },
    relations :{
        categories: 'OneToOne',
        user : 'ManyToOne'
    }

};