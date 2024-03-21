// EditUser.tsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { UserService, UserForm } from '../../features/users';
import { RoleOption, roleOptions } from '../../features/users/types';
import Breadcrumbs from '../../components/layout/Breadcrumbs';
import toast from 'react-hot-toast';
import axios from 'axios';

// Initialize UserService with the application's base URL
const apiUrl = process.env.API_URL || 'http://localhost';
const userService = new UserService(apiUrl);

/**
 * EditUser Component
 * 
 * Provides functionality to edit a user's details including their roles.
 * Utilizes UserService to fetch specific user data and update it upon form submission.
 */
const EditUser: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const navigate = useNavigate();

    // State for holding user data to edit
    const [user, setUser] = useState<{
        email: string,
        name: string,
        role_ids: RoleOption[],
    }>({ email: '', name: '', role_ids: [] });

    // State for form error handling
    const [formErrors, setFormErrors] = useState<{ [key: string]: string[] }>({});

    // Breadcrumb navigation items
    const breadcrumbItems = [
        { path: '/', label: 'Home' },
        { path: `/user/edit/${userId}`, label: 'Edit User' }
    ];

    /**
     * Fetches user data on component mount or userId change.
     */
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await userService.getUserById(Number(userId));

                const roleIds = response.data.roles.length === 0 ? [] : response.data.roles.reduce((acc, roleString) => {
                    const matchingRole = roleOptions.find(roleOption => roleOption.label === roleString);
                    if (matchingRole) {
                        acc.push(matchingRole);
                    }
                    return acc;
                }, [] as RoleOption[]);

                setUser({
                    email: response.data.email,
                    name: response.data.name,
                    role_ids: roleIds,
                });
            } catch (error) {
                console.error('Error fetching user:', error);
                toast.error('Failed to fetch user details.');
                if (axios.isAxiosError(error) && error.response?.status === 404) {
                    navigate('/not-found'); // Adjust this path according to your 404 route
                }
            }
        };
    
        if (userId) fetchUser();
    }, [userId]);
    
    /**
     * Handles the submission of the user form, updating the user's data.
     *
     * @param {string} email - The updated email of the user.
     * @param {string} fullName - The updated name of the user.
     * @param {RoleOption[]} selectedRoles - The updated roles of the user.
     */
    const handleSubmit = async (email: string, fullName: string, selectedRoles: RoleOption[]) => {
        const roleIds = selectedRoles.map(role => role.value);

        try {
            await userService.updateUser(Number(userId), {
                email,
                name: fullName,
                role_ids: roleIds,
            });
            navigate('/');
            toast.success('Successfully Updated User!');
        } catch (error) {
            if (axios.isAxiosError(error) && error.response?.data.errors) {
                setFormErrors(error.response.data.errors);
            } else {
                console.error('An unexpected error occurred:', error);
            }
        }
    };

    return (
        <div className='p-4'>
            <Breadcrumbs items={breadcrumbItems} />
            <div className='font-bold my-2 text-xl'>Edit User</div>
            <div className='w-full bg-white shadow-md rounded-lg p-4 mb-3'>
                {user.email && user.name ? (
                    <UserForm 
                        initialEmail={user.email} 
                        initialFullName={user.name} 
                        initialRoles={user.role_ids} 
                        onSubmit={handleSubmit} 
                        errors={formErrors} 
                    />
                ) : (
                    <div>Loading user data...</div>
                )}
            </div>
        </div>
    );
};

export default EditUser;
