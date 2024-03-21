import React, { useState, useEffect } from 'react';
import { UserTable, UserService, UserManagementHeader } from '../../features/users';
import { User } from '../../features/users/types';

const userService = new UserService('http://localhost');

const UserLists: React.FC = () => {

    const [users, setUsers] = useState<User[]>([]);

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
        <div>
            <UserManagementHeader />
            <UserTable users={users} />
        </div>
    );
};

export default UserLists;
