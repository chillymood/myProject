import axios from 'axios';
import * as constants from "./constants"

export const changeDetail = (title, content, imageUrl, username) => ({
    type: constants.CHANGE_DETAIL,
        title,
        content,
        imageUrl,
        username
})

export const changeDetailEditStatusAction = (editStatus) => ({
  type: constants.CHANGE_DETAIL_EDIT_STATUS,
  editStatus,
});

export const getDetail = (id) => {
  return (dispatch) => {
    axios.defaults.withCredentials = true;
        axios
          .get("http://35.229.221.230:3000/comment/detail?id=" + id)
          .then((response) => {
            const result = response.data.data;
            console.log(result);
            dispatch(
              changeDetail(result.title, result.content, result.imageUrl,result.username)
            );
          });
    }
}

export const editArticle = (id, content) => {
  return (dispatch) => {
    axios.defaults.withCredentials= true;
    axios.post("http://35.229.221.230:3000/comment/update", {
      _id: id,
      content
    }).then((response) => {
      const result = response.data.data;
      console.log(result);
      dispatch(
        changeDetail(
          result.title,
          result.content,
          result.imageUrl,
          result.username
        )
      );
    });
  }
}