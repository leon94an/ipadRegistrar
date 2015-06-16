Template.ipadEdit.events({

    'submit form': function(e) {
        e.preventDefault();
        var currentIpadId = this._id;
        var ipadProperties = {
            name: $(e.target).find('[name=name]').val(),
            location: $(e.target).find('[name=location]').val()
        }
        if (confirm("Confirm this change?")) {
            Ipads.update(currentIpadId, {
                $set: ipadProperties
            }, function(error) {
                if (error) {
                    // display the error to the user
                    alert(error.reason);
                } else {
                    Router.go('ipadEdit', {
                        _id: currentPostId
                    });
                }
            });
        }
    },

});