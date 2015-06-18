Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return [Meteor.subscribe('ipads'),Meteor.subscribe('users')];
    }
});

Router.route('/', {
    name: 'ipadsList'
});

Router.route('/ipads/:_id', {
    name: 'ipadEdit',
    data: function() {
        return Ipads.findOne(this.params._id);
    }
});

Router.route('/users', function(){
    this.render('adminUsers');
});

Router.route('/admin', function(){
    this.render('adminNav');
});
