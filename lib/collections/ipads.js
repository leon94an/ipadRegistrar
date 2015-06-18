Ipads = new Mongo.Collection('ipads');
Users = Meteor.users;

Ipads.allow({
    insert: function(userId, doc) {
        if(!userId){
            return false;
        }
        console.log('inserting', doc)
        if(doc.name && doc.location){
            return true;
        }else{
            return false;
        }

    },
    remove: function(userId, doc) {
        return !!userId;
    },
    update: function(userId, doc) {
        return !!userId;
    }
});

Ipads.before.insert( function(userId, doc){
    doc.createdAt = Date.now();
    doc.userId = userId;
})

Users.before.insert( function(userId, doc){
    doc.roles = ["basic"];
})

Users.allow({
    update: function(userId, doc) {
        return true;
    },
    insert: function(userId, doc) {
        return true;
    }
})

Meteor.roles.allow({
    update: function(userId, doc) {
        return true;
    },
    insert: function(userId, doc) {
        return true;
    }
})

// Meteor.methods({
//     ipadInsert: function(ipadAttributes) {
//         check(Meteor.userId(), String);
//         check(ipadAttributes, {
//             name: String,
//             location: String
//         });


//         var ipad = _.extend(ipadAttributes, {
//             userId: Meteor.userId(),
//             createdAt: new Date()
//         });


//         var ipadId = Ipads.insert(ipad);

//         return {
//             _id: ipadId
//         };
//     }
// });