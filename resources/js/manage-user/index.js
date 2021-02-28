import UserList from './user-list/user_list';

const LIST_USER = [
    {
        id: 1,
        name: 'Michael Holz',
        date_created: '04/10/2013',
        role: 'Admin',
        status: 'active'
    },
    {
        id: 2,
        name: 'Michael Holz',
        date_created: '04/10/2013',
        role: 'Admin',
        status: 'Suspended'
    },
    {
        id: 3,
        name: 'Michael Holz',
        date_created: '04/10/2013',
        role: 'Admin',
        status: 'active'
    },
    {
        id: 4,
        name: 'Michael Holz',
        date_created: '04/10/2013',
        role: 'Admin',
        status: 'Inactive'
    }
];

const userList = new UserList(LIST_USER);
userList.render();
