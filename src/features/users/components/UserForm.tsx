// src/components/UserForm.tsx
import React, { useState } from 'react';
import Select, { MultiValue } from 'react-select';

import { UserFormProps, RoleOption, roleOptions } from '../types';

const UserForm: React.FC<UserFormProps> = ({
    initialEmail = '',
    initialFullName = '',
    initialRoles = [],
    onSubmit,
    errors
}) => {
    const [email, setEmail] = useState<string>(initialEmail);
    const [fullName, setFullName] = useState<string>(initialFullName);
    const [selectedRoles, setSelectedRoles] = useState<RoleOption[]>(initialRoles);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(email, fullName, selectedRoles);
    };

    return (
        <form onSubmit={handleSubmit}>

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
            <button
                type='submit'
                className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center'
            >
                Submit
            </button>
        </form>
    );
};

export default UserForm;
