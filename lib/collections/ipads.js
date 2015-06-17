Ipads = new Mongo.Collection('ipads');
Users = Meteor.users;

Ipads.allow({
    insert: function(userId, doc) {
        return !!userId;
    },
    remove: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc){
        return !!userId;
    }
});

Users.allow({
    update: function(userId, doc){
        return !!userId;
    }
})

Meteor.methods({
    ipadInsert: function(ipadAttributes) {
        check(Meteor.userId(), String);
        check(ipadAttributes, {
            name: String,
            location: String
        });
        var ipad = ipadAttributes;


        var ipadId = Ipads.insert(ipad);

        return {
            _id: ipadId
        };
    }
});