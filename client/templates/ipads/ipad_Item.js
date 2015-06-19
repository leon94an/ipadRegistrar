Template.ipadItem.helpers({
	ownIpad: function() {
        return this.userId === Meteor.userId();
    },
});


Template.ipadItem.events({
    'click .delete': function(e) {
        e.preventDefault();
        var currentPostId = this._id;
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
                    Ipads.remove(currentPostId);
                    return this.EZModal.modal('hide');
                }
            }]
        });
        
    }
})