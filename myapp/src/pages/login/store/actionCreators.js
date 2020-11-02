import axios from "axios";
import * as constants from "./constants"
import { fromJS } from "immutable"

axios.defaults.withCredentials = true;


export const changeLogin = (result, account, password) => ({
    type: constants.CHANGE_LOGIN,
    account,
    password,
    result,
})


export const login = (account, password) => {
    return (dispatch) => { 
        axios.defaults.withCredentials = true;
        axios.post("http://35.229.221.230:3000/users/login",{
            username: account,
            password})
            .then((res) => {
                const result = res.data.succsess;
                dispatch(changeLogin(result, account, password));
        })
    
    }       
    
}

export const logOut = () => ({
    type: constants.LOG_OUT,
    result: false
})