import createAxios from './axiosConfig';

const authApi = createAxios('/auth');

class AuthService {
    async login(user) {
        try {
            const response = await authApi.post('signin', {
                username: user.username,
                password: user.password,
            });

            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        } catch (error) {
            throw error;
        }
    }

    logout() {
        localStorage.removeItem('user');
    }

    async register(user) {
        try {
            const response = await authApi.post('signup', {
                username: user.username,
                email: user.email,
                password: user.password,
                captcha: user.captcha,
            });

            return response.data;
        } catch (error) {
            throw error;
        }
    }
}

export default new AuthService();
