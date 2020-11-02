import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
import { changeHomeData } from '../../../pages/home/store/actionCreators'

axios.defaults.withCredentials = true;

const getheaderListAction = (data) => ({
  type: constants.GET_HEADER_LIST_ACTION,
  data: fromJS(data),
  totalPage: Math.ceil(data.length/10)
});

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS,
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR,
});

export const mouseEnter = () =>({
  type: constants.MOUSE_ENTER
})
  
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page,
})

export const getheaderList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(getheaderListAction(data.data));
    }).catch((err) => { console.log(err) });
  }
}

export const lookSelfArticle = () => {
  return (dispatch) => {
    axios
      .get("http://35.229.221.230:3000/comment/list?filterType=2")
      .then((response) => {
        const result = response.data.data;
        console.log(result);
        const action = changeHomeData(result);
        dispatch(action);
      }); 
    }
  }
  export const lookAllArticle = () => {
    return (dispatch) => {
      axios
        .get("http://35.229.221.230:3000/comment/list?filterType=1")
        .then((response) => {
          const result = response.data.data;
          console.log(result);
          const action = changeHomeData(result);
          dispatch(action);
        });
    };
  };
