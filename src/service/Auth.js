import store from '../utils/service';

export const register = (regData) => {
    return store.post('/register', regData);
};
export const login = (loginData) => {
    return store.post('/login', loginData);
};