Template.ipadItem.helpers({
	ownIpad: function() {
        return this.userId === Meteor.userId();
    },
});