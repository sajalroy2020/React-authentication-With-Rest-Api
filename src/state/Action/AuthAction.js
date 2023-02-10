import Cookies from "js-cookie";
import { login, register } from "../../service/Auth";
import { authenticatedFalse, authenticatedTrue } from "../Reducer/AuthSlice";

export const signIn = (regData, setWarnings) => async (dispatch) => {
    try {
        const { data } = await register(regData);
        Cookies.set('token', data.data.json_object.token);
        dispatch(authenticatedTrue());
        window.location.replace('/');
    } catch (error) {
        console.log(error);
        dispatch(authenticatedFalse());
        setWarnings(error.response.data.data.json_object.password);
    }
};
export const loginAction = (loginData, setWarning) => async (dispatch) => {
    try {
        const { data } = await login(loginData);
        Cookies.set('token', data.data.json_object.token);
        dispatch(authenticatedTrue());
        window.location.replace('/');
    } catch (error) {
        console.log(error);
        dispatch(authenticatedFalse());
        setWarning(error.response.data.data.json_object.username);
    }
};
export const authTokenCheck = () => async (dispatch) => {
    try {
        const token = Cookies.get('token');
        if (token) {
            dispatch(authenticatedTrue());
        } else {
            dispatch(authenticatedFalse());
        }
    } catch (error) {
        console.log(error);
    }
};