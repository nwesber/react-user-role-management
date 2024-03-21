import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserTableProps, userTableHeaders } from '../types';

/**
 * UserTable Component
 * 
 * Renders a table displaying user information with options to edit or delete users.
 * 
 * Props:
 *  - users: Array of user objects to be displayed in the table.
 *  - onDeleteUser: Function to call when the delete button is clicked for a user.
 */
const UserTable: React.FC<UserTableProps> = ({ users, onDeleteUser  }) => {

    const navigate = useNavigate();

    return (
        <div className='overflow-x-auto w-full bg-white shadow-md rounded-lg p-4 mb-3'>
            <table className='w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                    <tr>
                        {userTableHeaders.map(header => (
                            <th key={header.key} scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {header.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{user.id}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>{user.name}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.email}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>{user.roles.join(', ')}</td>
                            <td className='px-6 py-4 whitespace-nowrap text-right text-sm font-medium'>
                                <button
                                    onClick={() => navigate(`/user/edit/${user.id}`)}
                                    className='text-indigo-600 hover:text-indigo-900 mx-1'>
                                    Edit
                                </button>
                                <button
                                    onClick={() => onDeleteUser(user.id)}
                                    className='text-red-600 hover:text-red-800 mx-1'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;
