Ipads = new Mongo.Collection('ipads');

// Ipads.allow({
//     update: function(userId, ipad) {
//         return ownsDocument(userId, ipad);
//     },
//     remove: function(userId, ipad) {
//         return ownsDocument(userId, ipad);
//     },
// });

// Ipads.deny({
//     update: function(userId, ipad, fieldNames) {
//         // may only edit the following two fields:
//         return (_.without(fieldNames, 'url', 'title').length > 0);
//     }
// });

Meteor.methods({
    ipadInsert: function(ipadAttributes) {
        // check(Meteor.userId(), String);
        check(ipadAttributes, {
            name: String,
            location: String
        });
        var ipad= ipadAttributes;

        // var user = Meteor.user();
        // var post = _.extend(postAttributes, {
        //     userId: user._id,
        //     author: user.username,
        //     submitted: new Date()
        // });

        var ipadId = Ipads.insert(ipad);

        return {
            _id: ipadId
        };
    }
});