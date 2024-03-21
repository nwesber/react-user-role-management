// CreateUser.tsx
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService, UserForm } from '../../features/users';
import { RoleOption } from '../../features/users/types';
import Breadcrumbs from '../../components/layout/Breadcrumbs';
import toast from 'react-hot-toast';

// Initialize UserService with the application's base URL for API calls
const apiUrl = process.env.API_URL || 'http://localhost';
const userService = new UserService(apiUrl);

/**
 * CreateUser Component
 * 
 * Handles the creation of a new user by displaying a form and managing its submission.
 * Utilizes UserService for the creation API call and navigates back to the user list upon success.
 */
const CreateUser: React.FC = () => {
    const navigate = useNavigate();

    // State for managing form submission errors
    const [formErrors, setFormErrors] = useState<{ [key: string]: string[] }>({});

    // Breadcrumb navigation items
    const breadcrumbItems = [
        { path: '/', label: 'Home' },
        { path: '/create-user', label: 'Create User' }
    ];

    /**
     * Handles the submission of the user creation form.
     * 
     * Collects input data, calls the API to create a user, and handles response and errors.
     * 
     * @param {string} email - The email of the user to be created.
     * @param {string} fullName - The full name of the user to be created.
     * @param {RoleOption[]} selectedRoles - The roles assigned to the user to be created.
     */
    const handleSubmit = async (email: string, fullName: string, selectedRoles: RoleOption[]) => {
        const roleIds = selectedRoles.map(role => role.value);

        try {
            await userService.createUser({
                id: 0,
                email,
                name: fullName,
                role_ids: roleIds,
            });
            navigate('/');
            toast.success('Successfully Created User!');
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response && error.response.data.errors) {
                    setFormErrors(error.response.data.errors);
                } else {
                    console.error('An unexpected error occurred:', error);
                }
            } else {
                console.error('An unexpected error occurred:', error);
            }
        }
    };

    return (
        <div className='p-4'>
            <Breadcrumbs items={breadcrumbItems} />
            <div className='font-bold my-2 text-xl'>Create User</div>
            <div className='w-full bg-white shadow-md rounded-lg p-4 mb-3'>
                <UserForm onSubmit={handleSubmit} errors={formErrors} />
            </div>
        </div>
    );
};

export default CreateUser;