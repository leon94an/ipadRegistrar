Meteor.publish('ipads', function() {
    return Ipads.find();
});

// Meteor.publish('users', function() {
//    return Users.find({},{fields: {'username':1,'roles':1,'profile':1,'createdAt':1}});
// });

Meteor.publish(null, function() {
    return Meteor.roles.find({})
});

Meteor.publish('users', function() {
    if (Roles.userIsInRole(this.userId, ['admin'])) {

        return Users.find({}, {
            fields: {
                'username': 1,
                'roles': 1,
                'profile': 1,
                'createdAt': 1
            }
        });

    } else {
    	var thisUser=Users.find({_id:this.userId});
        return thisUser;

    }
});