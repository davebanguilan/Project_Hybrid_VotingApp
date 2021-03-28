import * as api from '../api';
import { AUTH } from '../constants/actionTypes';

export const signin = (formData, router) => async (dispatch) => {
    const { data } = await api.signIn(formData);

    console.log(data);
    dispatch({ type: AUTH, data });

    router.push("/");
};

export const signup = (formData, router) => async (dispatch) => {
    const { data } = await api.signUp(formData);
    
    dispatch({ type: AUTH, data });
    
    router.push("/");
};