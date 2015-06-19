Template.ipadSubmit.events({
  'submit form': function(e,template) {
    e.preventDefault();
    var $target = $(e.target)
    var ipad = {
      name: $target.find('[name=name]').val(),
      location: $target.find('[name=location]').val(),
    };
    
    Ipads.insert(ipad);
    template.find("form").reset();

  }
});