
/**
 * Represents the basic structure of a User in the system.
 */
export interface User {
    id: number;
    name: string;
    email: string;
    roles: string[];
}

/**
 * Represents the structure for creating a new user,
 * derived from User but replacing 'roles' with 'role_ids'.
 */
export interface UserCreation extends Omit<User, 'roles'> {
    role_ids: number[];
}

/**
 * Props for UserTable component, including the list of users and a delete function.
 */
export interface UserTableProps {
    users: User[];
    onDeleteUser: (userId: number) => void;
}

/**
 * Represents a selectable role option in UI components.
 */
export interface RoleOption {
    value: number;
    label: string;
}
 
/**
 * Pre-defined list of role options available for assignment to users.
 */
export const roleOptions: RoleOption[] = [
    { value: 1, label: 'Author' },
    { value: 2, label: 'Editor' },
    { value: 3, label: 'Subscriber' },
    { value: 4, label: 'Administrator' },
];

/**
 * Defines the headers for the UserTable component.
 */
export const userTableHeaders = [
    { key: 'number', label: '#' },
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'roles', label: 'Roles' },
    { key: 'actions', label: 'Actions' },
];

/**
 * Props for UserForm component, used for creating or editing users.
 */
export interface UserFormProps {
    initialEmail?: string;
    initialFullName?: string;
    initialRoles?: RoleOption[];
    onSubmit: (email: string, fullName: string, selectedRoles: RoleOption[]) => void;
    errors?: { [key: string]: string[] };
}
  