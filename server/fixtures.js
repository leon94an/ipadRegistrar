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
    Roles.removeUsersFromRoles(account, 'basic');
    Roles.addUsersToRoles(account, 'admin');

}