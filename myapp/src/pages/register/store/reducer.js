import { fromJS } from "immutable";
import * as constants  from "./constants";

const defaultState = fromJS({
   registerSuccess: 0, //0 預設  1登入成功  2登入失敗
});



export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.REGISTER_SUCCESS:
      return state.set("registerSuccess", action.result);
    default:
      return state;
  }
};
