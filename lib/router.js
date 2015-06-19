Router.configure({
    onBeforeAction: function(){
        if(!Meteor.userId() && !Meteor.loggingIn()){
             Router.go('/');
        }
        else{
            this.next();
        }
    },
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function() {
        return [Meteor.subscribe('ipads'), Meteor.subscribe('users')];
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


Router.route('/admin', function() {
    if (Roles.userIsInRole(Meteor.userId(), ['admin'])) {
        this.render('adminNav');
    } else {
        this.render('accessDenied');
    }  
});

Router.route('/submissions', function() {
    this.render('mySubmissions');
});