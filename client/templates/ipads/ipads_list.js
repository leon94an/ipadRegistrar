Template.ipadsList.helpers({
    ipads: function() {
        return Ipads.find();
    }
});

Template.ipadsList.events({
    'click .delete': function(e) {
        e.preventDefault();
        if (confirm("Delete this ipad?")) {
            var currentPostId = this._id;
            Ipads.remove(currentPostId);
        }
    }
}) 