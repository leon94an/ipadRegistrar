Meteor.publish('ipads', function() {
  return Ipads.find();
});