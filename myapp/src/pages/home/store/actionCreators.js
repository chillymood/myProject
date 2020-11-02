import axios from "axios";
import * as constants from "./constants"
import { fromJS } from "immutable"

axios.defaults.withCredentials = true;


export const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  // topicItem: result.topicItem,
  articleList: result,
  // recommendList: result.recommendList,
});

export const addHomeList = (list,nextPage) => ({
  type: constants.ADD_HOME_LIST,
  list: fromJS(list),
  nextPage
})

export const changeScrollTopShow = () => ({
  type: constants.CHANGE_SCROLL_TOP_SHOW,
})





export const toggleTopShow = (show) => ({
  type: constants.TOGGLE_SCROLL_TOP,
  show
})


export const getHomeInfo = () => {
  return (dispatch) => {
        axios.get("http://35.229.221.230:3000/comment/list?filter=1")
          .then((response) => {
            const result = response.data.data;
            const action = changeHomeData(result);
            dispatch(action);
          }); 
    }
}

export const delArticle = (id) => {
  return (dispatch) => {
    axios.defaults.withCredentials = true;
    axios.post("http://35.229.221.230:3000/comment/del", {
      _id:id,
    }).then(response => {
      axios
        .get("http://35.229.221.230:3000/comment/list?filter=1")
        .then((response) => {
          const result = response.data.data;
          console.log(result);
          const action = changeHomeData(result);
          dispatch(action);
        }); 
    })
  }
}

