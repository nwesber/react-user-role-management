// CreateUser.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserService, UserForm } from '../../features/users';
import { RoleOption } from '../../features/users/types';
import axios from 'axios';

const userService = new UserService('http://localhost');

const CreateUser: React.FC = () => {
    const navigate = useNavigate();

    const [formErrors, setFormErrors] = useState<{ [key: string]: string[] }>({});

    const handleSubmit = async (email: string, fullName: string, selectedRoles: RoleOption[]) => {
        const roleIds = selectedRoles.map(role => role.value);

        try {
            await userService.createUser({
                email,
                name: fullName,
                role_ids: roleIds,
            });
            navigate('/');
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
            <div className='font-bold my-2 text-xl'>Create User</div>
            <div className='w-full bg-white shadow-md rounded-lg p-4 mb-3'>
                <UserForm onSubmit={handleSubmit} errors={formErrors} />
            </div>
        </div>
    );
};

export default CreateUser;