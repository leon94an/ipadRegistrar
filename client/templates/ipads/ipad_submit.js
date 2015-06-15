Template.ipadSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    
    var ipad = {
      name: $(e.target).find('[name=name]').val(),
      location: $(e.target).find('[name=location]').val()
    };
    
    Meteor.call('ipadInsert', ipad, function(error, result) {
      // display the error to the user and abort
      if (error)
        return alert(error.reason);
       
    });
  }
});