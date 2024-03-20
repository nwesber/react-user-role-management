import React from 'react';
import { UserTableProps } from '../types'; 

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  console.log(users);
  return (
    <div className="overflow-x-auto">
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              #
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Roles
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            { users.map( ( user, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ user.id }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{ user.name }</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ user.email }</td>
                {console.log(user.roles)}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{ user.roles.join(', ') }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;