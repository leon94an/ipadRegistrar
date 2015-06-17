Meteor.publish('ipads', function() {
  return Ipads.find();
});

Meteor.publish('users', function() {
   return Users.find()({}, {fields: {username: 1}});;
})