import createAxios from './axiosConfig';
import authHeader from './authHeader';

const adminApi = createAxios('/admin');

class AdminAccess {
    getClientsContent() {
        return adminApi.get('clients', { headers: authHeader() });
    }
}

export default new AdminAccess();
