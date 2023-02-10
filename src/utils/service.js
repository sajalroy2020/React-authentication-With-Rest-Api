import axios from "axios";
import Cookies from "js-cookie";

const service = axios.create({
    baseURL: "https://azzoz.itech-theme.com/api",
    headers: {
        Accept: 'application/json'
    }
});

service.interceptors.request.use((config) => {
    const token = Cookies.get('token');
    if (token) {
        config.headers.Authorization = (`Bearer ${token}`);
    };
    return config;
});

export default service;