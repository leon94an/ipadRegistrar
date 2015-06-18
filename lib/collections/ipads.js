Ipads = new Mongo.Collection('ipads');
Users = Meteor.users;

Ipads.allow({
    insert: function(userId, doc) {
        if (!userId) {
            return false;
        }
        if (doc.name && doc.location) {
            return true

        } else {
            return false;
        }

    },
    remove: function(userId, doc) {

        if (Roles.userIsInRole(userId, ['admin'])) {
            return true;
        } else if (userId === doc.userId) {
            return true;
        } else return false;
    },

    update: function(userId, doc) {
        if (Roles.userIsInRole(userId, ['admin'])) {
            return true;
        } else if (userId === doc.userId) {
            return true;
        } else return false;
    }
});

Ipads.before.insert(function(userId, doc) {
    doc.createdAt = Date.now();
    doc.userId = userId;
})

Users.before.insert(function(userId, doc) {
    doc.roles = ["basic"];
})

Users.allow({
    update: function(userId, doc) {
        if (Roles.userIsInRole(userId, ['admin'])) {
            return true;
        } else return false;
    },
    insert: function(userId, doc) {
        return true;
    },
    remove: function(userId, doc) {
        if (Roles.userIsInRole(userId, ['admin'])) {
            return true;
        } else return false;
    }
})

Meteor.roles.allow({
    update: function(userId, doc) {
        return false;
    },
    insert: function(userId, doc) {
        return true;
    },
    remove: function(userId, doc) {
        if (Roles.userIsInRole(userId, ['admin'])) {
            return true;
        } else return false;
    }
})