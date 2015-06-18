Template.adminUser.helpers({
    userIpads: function() {
    	var currentUserId = this._id;
        return Ipads.find({userId:currentUserId});
    },
    notAdmin: function() {
    	var targetUser= Users.findOne({_id:this._id});
        return ((this._id !== Meteor.userId())  &&  (targetUser.roles[0]!=='admin') );
    },
});

Template.adminUser.events({
    'click .admin': function(e) {
        e.preventDefault();
        if (confirm("Make this user admin?")) {
            var currentUserId = this._id;
            Roles.removeUsersFromRoles(currentUserId, 'basic');
            Roles.addUsersToRoles(currentUserId, 'admin');
        }
    }
}) 
