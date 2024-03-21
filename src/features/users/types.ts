export interface User {
    id?: number;
    name: string;
    email: string;
    roles: string[];
}

export interface UserCreation extends Omit<User, 'roles'> {
    role_ids: number[];
}

export interface UserTableProps {
    users: User[];
}

export interface RoleOption {
    value: number;
    label: string;
}
  
export const roleOptions: RoleOption[] = [
    { value: 1, label: 'Author' },
    { value: 2, label: 'Editor' },
    { value: 3, label: 'Subscriber' },
    { value: 4, label: 'Administrator' },
];

export interface UserFormProps {
    initialEmail?: string;
    initialFullName?: string;
    initialRoles?: RoleOption[];
    onSubmit: (email: string, fullName: string, selectedRoles: RoleOption[]) => void;
    errors?: { [key: string]: string[] };
}
  