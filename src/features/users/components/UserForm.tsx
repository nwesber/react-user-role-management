// src/components/UserForm.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { UserFormProps, RoleOption, roleOptions } from '../types';

/**
 * A form component for creating or editing a user.
 * 
 * This form includes fields for the user's full name, email address, and roles.
 * It supports both creation and update operations based on the initial props provided.
 *
 * @param {UserFormProps} props - The props containing initial form values, submission handler, and errors.
 */
const UserForm: React.FC<UserFormProps> = ({
    initialEmail = '',
    initialFullName = '',
    initialRoles = [],
    onSubmit,
    errors
}) => {

    // State hooks for form fields
    const [email, setEmail] = useState<string>(initialEmail);
    const [fullName, setFullName] = useState<string>(initialFullName);
    const [selectedRoles, setSelectedRoles] = useState<RoleOption[]>(initialRoles);

    const navigate = useNavigate();

    /**
     * Handles the submission of the form, preventing the default form submit action,
     * and invokes the provided onSubmit callback with the current form values.
     */
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(email, fullName, selectedRoles);
    };

    /**
     * Navigates the user back to the home page.
     */
    const handleGoBack = () => {
        navigate('/');
    };

    return (
        <form onSubmit={handleSubmit}>

            {/* Errors Section */}
            {errors && (errors.email && errors.email.length > 0) && (
                <div className='mb-4 bg-red-700 text-white rounded-md p-4'>
                    {errors.email && (
                        <div className='text-white text-sm'>
                            {errors.email.join(', ')}
                        </div>
                    )}
                </div>
            )}

            {/* Full Name Input */}
            <div className='mb-4'>
                <label htmlFor='fullName' className='block mb-2 text-sm font-medium text-gray-700'>Full Name<span className='text-red-500 mx-2'>*</span></label>
                <input
                    type='text'
                    id='fullName'
                    placeholder='John Doe'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    required
                />
            </div>

            {/* Email Input */}
            <div className='mb-4'>
                <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-700'>Email Address<span className='text-red-500 mx-2'>*</span></label>
                <input
                    type='email'
                    id='email'
                    placeholder='johndoe@example.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                    required
                />
            </div>

            {/* Roles Select */}
            <div className='mb-4'>
                <label htmlFor='roles' className='block mb-2 text-sm font-medium text-gray-700'>Roles<span className='text-red-500 mx-2'>*</span></label>
                <Select
                    id='roles'
                    placeholder='Select Roles'
                    instanceId='roles'
                    options={roleOptions}
                    isMulti
                    value={selectedRoles}
                    onChange={(selected) => setSelectedRoles(selected as RoleOption[])}
                    className='text-base border border-gray-300 rounded-lg'
                />
            </div>

            {/* Actions Section */}
            <div className='flex justify-between space-x-4'>
                <button
                    type='button' 
                    onClick={handleGoBack}
                    className='text-blue-700 bg-transparent font-medium rounded-lg text-sm px-5 py-2.5 text-center border border-blue-700'
                >
                    Go Back
                </button>
                <button
                    type='submit'
                    className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
                >
                    Submit
                </button>
            </div>
        </form>
    );
};

export default UserForm;
