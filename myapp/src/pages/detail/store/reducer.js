import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  title: "",
  content: "",
  imageUrl: "",
  username:"",
  editStatus: 0,  //0 無  // 1 編輯模式   2 編輯結束
});



export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
     return state.merge({
        title: action.title,
        content: action.content,
       imageUrl: action.imageUrl,
        username:action.username
     })
    case constants.CHANGE_DETAIL_EDIT_STATUS:
    return state.set("editStatus", action.editStatus)
    default:
      return state;
  }
};
