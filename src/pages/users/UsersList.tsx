import React, { useState, useEffect } from 'react';
import { UserTable, UserService } from '../../features/users';
import { User } from '../../features/users/types';

const userService = new UserService('http://localhost'); // Use your actual API base URL

const UserLists: React.FC = () => {

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Define an async function to fetch users
    const fetchUsers = async () => {
      try {
        const response = await userService.getUsers();
        setUsers(response); // Update state with fetched users
      } catch (error) {
        console.error('Failed to fetch users:', error);
        // Handle error appropriately in your UI
      }
    };

    fetchUsers(); // Call the fetch function
  }, []); // Empty dependency array means this effect runs once on mount
   
  return (
    <div>
      <UserTable users={users} />
    </div>
  );
};

export default UserLists;
