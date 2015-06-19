if ( Meteor.users.find().count() === 0 ) {
    var account=Accounts.createUser({
        username: 'admin',
        email: 'email',
        password: 'admin-default',
        profile: {
            first_name: 'first',
            last_name: 'admin',
            company: 'company',
        },
    });
    Roles.addUsersToRoles(account, 'admin');
    Roles.removeUsersFromRoles(account, 'basic');


}