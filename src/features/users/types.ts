export interface User {
    id?: number;
    name: string;
    email: string;
    roles: string[];
}

export interface UserTableProps {
    users: User[];
}