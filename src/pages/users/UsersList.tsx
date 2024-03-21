import React, { useState, useEffect } from 'react';
import { UserTable, UserService } from '../../features/users';
import { User } from '../../features/users/types';
import Breadcrumbs from '../../components/layout/Breadcrumbs';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

// Initialize UserService with the application's base URL
const apiUrl = process.env.API_URL || 'http://localhost';
const userService = new UserService(apiUrl);

/**
 * UserLists Component
 * 
 * Displays a list of users with options to create a new user or delete existing ones.
 * Utilizes UserService to fetch and manage user data.
 */
const UserLists: React.FC = () => {

    // State to hold the list of users
    const [users, setUsers] = useState<User[]>([]);

    // Breadcrumb navigation items
    const breadcrumbItems = [
        { path: '/', label: 'Home' },
    ];

    // Navigation hook for routing
    const navigate = useNavigate();

    /**
     * Navigates to the Create User page.
     */
    const navigateToCreateUser = () => {
        navigate('/user/create');
    };

    /**
     * Fetches users from the server on component mount and updates the state.
     */
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

    /**
     * Deletes a user after confirmation.
     * 
     * @param {number} userId The ID of the user to delete.
     */
    const deleteUser = async (userId: number) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this user?");
        if (isConfirmed) {
            try {
                await userService.deleteUser(userId);
                setUsers(users.filter(user => user.id !== userId));
                toast.success("Successfully Deleted User.");
            } catch (error) {
                console.error('Failed to delete user:', error);
                toast.error("Failed to delete user.");
            }
        }
    };
    
    return (
        <div className='p-4'>
            <Breadcrumbs items={breadcrumbItems} />
            <div className='flex flex-col sm:flex-row justify-between items-center'>
                <div className="font-bold my-2 text-xl">User Management</div>
                <button 
                    className='px-4 py-1 bg-blue-500 text-white font-bold rounded my-2'
                    onClick={navigateToCreateUser}
                >
                    Create User
                </button>
            </div>
            <UserTable users={users} onDeleteUser={deleteUser} />
        </div>
    );
};

export default UserLists;
