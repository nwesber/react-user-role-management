import { useNavigate } from 'react-router-dom';

const UserManagementHeader = () => {
    const navigate = useNavigate();

    const navigateToCreateUser = () => {
        navigate('/user/create');
    };

    return (
        <div className='flex flex-col sm:flex-row justify-between items-center'>
            <div className="font-bold my-2 text-xl">User Management</div>
            <button 
                className='px-4 py-1 bg-blue-500 text-white font-bold rounded my-2'
                onClick={navigateToCreateUser}
            >
                Create User
            </button>
        </div>
    );
};

export default UserManagementHeader;
