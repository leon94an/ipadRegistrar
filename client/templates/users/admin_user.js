Template.adminUser.helpers({
    userIpads: function() {
        return Ipads.find({author: username});
    }
});