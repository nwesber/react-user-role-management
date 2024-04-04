import React from 'react';

interface RoleSelectionProps {
    roles: number;
    setRoles: (role: number) => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ roles , setRoles }) => {

    const onRoleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRoles(parseInt(event.target.value));
    };

    return (
        <select className='border border-black rounded px-3 py-2 mx-2' onChange={onRoleSelect} value={roles}>
            <option value={0}>Select Role</option>
            <option value={4}>Administrator</option>
            <option value={2}>Editor</option>
            <option value={3}>Subscriber</option>
            <option value={1}>Author</option>
        </select>
    )
};
export default RoleSelection;