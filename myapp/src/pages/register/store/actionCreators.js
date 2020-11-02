import axios from "axios";
import * as constants from "./constants"
import { fromJS} from "immutable"

axios.defaults.withCredentials = true;


export const registerSuccessAction = (result) => ({
    type: constants.REGISTER_SUCCESS,
    result,
})


export const register = (account, password) => {
    return (dispatch) => { 
       axios
         .post("http://35.229.221.230:3000/users/register", {
           username: account,
           password,
         })
           .then((res) => {
            console.log(res);
             const result = res.data.succsess;
             if (result) {
               dispatch(registerSuccessAction(1))
              }else {
               dispatch(registerSuccessAction(2))
             }
         })
         .catch((err) => {
          dispatch(registerSuccessAction(2))
         });
    
    }       
    
}

