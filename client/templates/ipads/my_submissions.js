Template.mySubmissions.helpers({
    myIpads: function() {
        return Ipads.find({userId:Meteor.userId()});
    }
});