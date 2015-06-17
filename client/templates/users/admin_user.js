Template.adminUser.helpers({
    userIpads: function() {
    	var currentUserId = Meteor.userId();
        return Ipads.find({userId: Meteor.userId()});
    }
});

