import { fromJS } from "immutable";
import * as constants  from "./constants";

const defaultState = fromJS({
  login: false,
  account:""
});


export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_LOGIN:
      return state.merge({
        "login": action.result,
        "account": action.account
      })
    case constants.LOG_OUT:
      return state.set("login",action.result)
    default:
      return state;
  }
};
