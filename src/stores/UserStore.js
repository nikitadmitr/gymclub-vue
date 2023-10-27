import createAxios from '@/services/axiosConfig';

import { defineStore } from 'pinia';
import AuthService from '@/services/AuthService';
import authHeader from '@/services/authHeader';

const userApi = createAxios('/users');

const user = JSON.parse(localStorage.getItem('user'));
const userState = user
    ? { status: { loggedIn: true }, user }
    : { status: { loggedIn: false }, user: null };

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            userState,
        };
    },
    getters: {
        user: (state) => state.userState.user,
        userId: (state) => state.userState.user?.id,
        loggedIn: (state) => state.userState.status.loggedIn,
        isAdmin: (state) =>
            state.userState.user?.roles.includes('admin') || false,
    },
    actions: {
        async login(user) {
            try {
                const loggedInUser = await AuthService.login(user);
                this.userState.status.loggedIn = true;
                this.userState.user = loggedInUser;
                return loggedInUser;
            } catch (error) {
                this.userState.status.loggedIn = false;
                this.userState.user = null;
                throw error;
            }
        },

        async changePassword(passwords) {
            try {
                const response = await userApi.patch(
                    `${this.userId}/change-password`,
                    {
                        oldPassword: passwords.oldPassword,
                        newPassword: passwords.newPassword,
                    },
                    {
                        headers: authHeader(),
                    }
                );
                return response.data;
            } catch (error) {
                throw error;
            }
        },

        async editProfile(data) {
            try {
                const response = await userApi.put(`${this.userId}`, data, {
                    headers: authHeader(),
                });
                return response.data;
            } catch (error) {
                throw error;
            }
        },

        logout() {
            AuthService.logout();
            this.userState.status.loggedIn = false;
            this.userState.user = null;
        },

        async register(user) {
            try {
                const response = await AuthService.register(user);
                this.userState.status.loggedIn = false;
                return response;
            } catch (error) {
                this.userState.status.loggedIn = false;
                throw error;
            }
        },
    },
});
