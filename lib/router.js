Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return Meteor.subscribe('ipads');
    }
});

Router.route('/', {
    name: 'ipadsList'
});

// Router.route('/ipads/:_id', {
//     name: 'ipadDetails',
//     data: function() {
//         return Posts.findOne(this.params._id);
//     }
// });

// Router.route('/ipads/:_id/edit', {
//     name: 'ipadEdit',
//     data: function() {
//         return Posts.findOne(this.params._id);
//     }
// });

// Router.route('/submit', {
//     name: 'ipadSubmit'
// });

// Router.onBeforeAction('dataNotFound', {
//     only: 'ipadDetails'
// });
