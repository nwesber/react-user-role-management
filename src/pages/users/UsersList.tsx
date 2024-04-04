import React, { useState, useEffect } from 'react';
import { UserTable, UserService, RoleSelection } from '../../features/users';
import { User } from '../../features/users/types';
import Breadcrumbs from '../../components/layout/Breadcrumbs';
import Pagination from '../../components/layout/Pagination';
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
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);
    const [roles, setRoles] = useState<number>(0)



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
        const fetchUsers = async (page: number = 1) => {
            try {
                const response = await userService.getUsers(page, roles);
                setUsers(response.data);
                setTotalPages(response.meta.last_page);
                setCurrentPage(response.meta.current_page);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchUsers(currentPage);
    }, [currentPage, roles]);

    const navigateToPage = (page: number) => {
        setCurrentPage(page);
    };

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
            <div className='p-3 bg-white shadow-md rounded-md my-3 flex justify-end items-baseline'>
                Select Role: <RoleSelection roles={roles} setRoles={setRoles} />
            </div>
            
            <UserTable users={users} onDeleteUser={deleteUser} />
            <Pagination currentPage={currentPage} totalPages={totalPages} navigateToPage={navigateToPage} />
        </div>
    );
};

export default UserLists;
