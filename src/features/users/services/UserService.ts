// src/services/UserService.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';

import { User } from '../types';

class UserService {
  private axiosInstance: AxiosInstance;

    constructor(baseURL: string) {
        this.axiosInstance = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    public async getUsers(): Promise<User[]> {
        const response = await this.axiosInstance.get('/api/users');
        return response.data.data;
    }

    public async getUserById(id: number): Promise<AxiosResponse<User>> {
        return this.axiosInstance.get(`/api//users/${id}`);
    }

    public async createUser(user: User): Promise<AxiosResponse<User>> {
        return this.axiosInstance.post('/api/users', user);
    }

    public async updateUser(id: number, user: Partial<User>): Promise<AxiosResponse<User>> {
        return this.axiosInstance.put(`/api/users/${id}`, user);
    }

    public async deleteUser(id: number): Promise<AxiosResponse<void>> {
        return this.axiosInstance.delete(`/api/users/${id}`);
    }
}

// Example usage:
// const userService = new UserService('http://localhost:3000');
// userService.getUsers().then(response => console.log(response.data));

export default UserService;