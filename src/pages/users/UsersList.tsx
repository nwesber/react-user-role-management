import React, { useState, useEffect } from 'react';
import { UserTable, UserService, UserManagementHeader } from '../../features/users';
import { User } from '../../features/users/types';
import Breadcrumbs from '../../components/layout/Breadcrumbs';

const userService = new UserService('http://localhost');

const UserLists: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);

    const breadcrumbItems = [
        { path: '/', label: 'Home' },
    ];

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await userService.getUsers();
                setUsers(response);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchUsers();
    }, []);
   
    return (
        <div className='p-4'>
            <Breadcrumbs items={breadcrumbItems} />
            <UserManagementHeader />
            <UserTable users={users} />
        </div>
    );
};

export default UserLists;
