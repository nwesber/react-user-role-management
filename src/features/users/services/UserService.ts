// src/services/UserService.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { User, UserCreation, UsersApiResponse } from '../types';

/**
 * Service class responsible for making API calls related to user operations.
 * Utilizes axios for HTTP requests.
 */
class UserService {
    private axiosInstance: AxiosInstance;

    /**
     * Initializes the UserService with a base URL for the API.
     * 
     * @param {string} baseURL - The base URL for the user-related API endpoints.
     */
    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    /**
     * Fetches a list of users from the API.
     * 
     * @returns {Promise<User[]>} A promise that resolves to an array of User objects.
     */
    public async getUsers(page: number): Promise<UsersApiResponse> {
        const response = await this.axiosInstance.get(`/api/users?page=${page}`);
        return response.data;
    }

    /**
     * Fetches a single user by their ID.
     * 
     * @param {number} id - The unique identifier of the user to retrieve.
     * @returns {Promise<AxiosResponse<User>>} A promise that resolves to the User object.
     */
    public async getUserById(id: number): Promise<AxiosResponse<User>> {
        const response = await this.axiosInstance.get(`/api/users/${id}`);
        return response.data;
    }

    /**
     * Creates a new user with the specified details.
     * 
     * @param {UserCreation} user - The details of the new user to create.
     * @returns {Promise<AxiosResponse<User>>} A promise that resolves to the created User object.
     */
    public async createUser(user: UserCreation): Promise<AxiosResponse<User>> {
        return this.axiosInstance.post('/api/users', user);
    }

    /**
     * Updates an existing user's details.
     * 
     * @param {number} id - The unique identifier of the user to update.
     * @param {Partial<UserCreation>} user - The details of the user to update.
     * @returns {Promise<AxiosResponse<User>>} A promise that resolves to the updated User object.
     */
    public async updateUser(id: number, user: Partial<UserCreation>): Promise<AxiosResponse<User>> {
        return this.axiosInstance.put(`/api/users/${id}`, user);
    }

    /**
     * Deletes a user by their ID.
     * 
     * @param {number} id - The unique identifier of the user to delete.
     * @returns {Promise<AxiosResponse<void>>} A promise that resolves when the user is successfully deleted.
     */
    public async deleteUser(id: number): Promise<AxiosResponse<void>> {
        return this.axiosInstance.delete(`/api/users/${id}`);
    }
}

export default UserService;
