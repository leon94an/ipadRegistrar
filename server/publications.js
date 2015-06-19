Meteor.publish('ipads', function() {
    if(this.userId){
        return Ipads.find();
    }
    return null;
});


Meteor.publish(null, function() {
    return Meteor.roles.find({})
});

Meteor.publish('users', function() {
    if(Roles.userIsInRole(this.userId, ['admin'])){
        var query = {}
    } else {
        var query = {_id:this.userId}
    }

    return Users.find(query, {fields: {
        'username': 1,
        'roles': 1,
        'profile': 1,
        'createdAt': 1
    }});


});