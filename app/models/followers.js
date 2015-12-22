module.exports = {
    name: 'followers',
    attrs: {
        notif_alert: {type: 'bool'}
    },
    relations : {
        user : 'ManyToOne',
        chaine : 'ManyToOne'
    }
};