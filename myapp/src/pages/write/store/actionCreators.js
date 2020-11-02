import axios from "axios";
import * as constants from "./constants"
import { fromJS } from "immutable"

axios.defaults.withCredentials = true;

export const postArticleAction = (success) => ({
    type: constants.ADD_ARTICLE,
    success
})


export const postArticle = (title, content, imgUrl) => {
    return (dispatch) => {
      axios.defaults.withCredentials = true;
            axios
              .post("http://35.229.221.230:3000/comment/create", {
                title,
                content,
                imageUrl: imgUrl,
              })
          .then((res) => {
            dispatch(postArticleAction(1));
          })
          .catch((err) => {
            dispatch(postArticleAction(2));
          });
    }       
    
}
