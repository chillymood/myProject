import { fromJS } from "immutable";
import * as constants  from "./constants";

const defaultState = fromJS({
  login: false,
  postStatus:0,  //0預設  1 成功  2 失敗
});



export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.ADD_ARTICLE:
      return state.set("postStatus", action.success)
    default:
      return state;
  }
};
