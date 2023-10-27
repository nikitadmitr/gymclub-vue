import axios from 'axios';

const baseURL = import.meta.env.V_SERVER_API_URL;

const createAxios = (path) => {
    const instance = axios.create({
        baseURL: baseURL + path,
    });

    return instance;
};

export default createAxios;
