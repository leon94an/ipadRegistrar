Template.adminNav.helpers({
    users: function() {
        return Meteor.users.find();
    }
});
