Template.ipadEdit.events({

    'submit form': function(e) {
        e.preventDefault();
        var currentIpadId = this._id;
        var $target = $(e.target)
        var ipadProperties = {
            name: $target.find('[name=name]').val(),
            location: $target.find('[name=location]').val(),
        };
        EZModal({
            title: 'Please Confirm',
            body: 'Are you sure you wish to edit the contents?',
            leftButtons: [{
                color: 'danger',
                html: 'Cancel'
            }],
            rightButtons: [{
                color: 'primary',
                html: 'Yes',
                fn: function(e, tmpl) {
                    Ipads.update(currentIpadId, {
                        $set: ipadProperties
                    }, function(error) {
                        if (error) {
                            // display the error to the user
                            EZModal(error.reason);
                        } else {
                            Router.go('ipadEdit', {
                                _id: currentIpadId
                            });
                        }
                    });
                    return this.EZModal.modal('hide');
                }
            }]
        });
       
    },




});