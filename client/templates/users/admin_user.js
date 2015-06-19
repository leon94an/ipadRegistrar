Template.adminUser.helpers({
    userIpads: function() {
        var currentUserId = this._id;
        return Ipads.find({
            userId: currentUserId
        });
    },
    notAdmin: function() {
        var targetUser = Users.findOne({
            _id: this._id
        });
        return ((this._id !== Meteor.userId()) && (targetUser.roles[0] !== 'admin'));
    },
});

Template.adminUser.events({
    'click .admin': function(e) {
        e.preventDefault();
        var currentUserId = this._id;

        EZModal({
            title: 'Please Confirm',
            body: 'Delete this ipad?',
            leftButtons: [{
                color: 'danger',
                html: 'Cancel'
            }],
            rightButtons: [{
                color: 'primary',
                html: 'Yes',
                fn: function(e, tmpl) {
                    Roles.removeUsersFromRoles(currentUserId, 'basic');
                    Roles.addUsersToRoles(currentUserId, 'admin');
                    return this.EZModal.modal('hide');
                }
            }]
        });
    }
})