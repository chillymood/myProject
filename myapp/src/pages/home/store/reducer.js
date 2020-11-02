import { fromJS } from "immutable";
import * as constants  from "./constants";

const defaultState = fromJS({
  topicItem: [
    {
      title: "生活記事",
      imgUrl: "https://cdn.clm02.com/ezvivi.com/266168/1499408149_864.jpg",
    },
    {
      title: "兩性話題",
      imgUrl: "https://www.lnka.tw/images/article/20131210083405432.jpg",
    },
    {
      title: "國際焦點",
      imgUrl: "https://cw1.tw/CW/images/blog/C1470278300960.jpg",
    },
    {
      title: "社會觀察",
      imgUrl: "https://www.easpnet.com/wp-content/uploads/about2019041106.jpg",
    },
    {
      title: "旅遊札記",
      imgUrl: "https://pic.pimg.tw/loloto/1545850883-2546562529.jpg",
    },
    {
      title: "美食饗宴",
      imgUrl:
        "https://www.gomaji.com/blog/wp-content/uploads/2020/04/Da-Tung-Food-Banner-e1588216225724.jpg",
    },
    {
      title: "心靈雞湯",
      imgUrl: "https://ext.pimg.tw/bachflower38/1418028534-1958387180_m.png",
    },
    {
      title: "投資理財",
      imgUrl:
        "https://storage.googleapis.com/www-cw-com-tw/article/201910/article-5da3e5259ae5a.jpg",
    },
    { title: "醫藥健康", imgUrl: "https://upload.cc/i/Tmeu2d.jpg" },
  ],
  articleList: [],
  RecommendList: [],
  articlePage: 0,
  showScroll: false,
});

const changeHomeData = (state, action) => {
  return state.merge({
    // topicItem: fromJS(action.topicItem),
    articleList: fromJS(action.articleList),
    // RecommendList: fromJS(action.recommendList),
  });
  
  
}

const addHomeList = (state, action) => {
  return state.merge({
    articleList: state.get("articleList").concat(action.list),
    articlePage: action.nextPage,
  });
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return changeHomeData(state, action)
    case constants.ADD_HOME_LIST:
      return addHomeList(state, action)
    case constants.TOGGLE_SCROLL_TOP:
      return state.set("showScroll",action.show)
    default:
      return state;
  }
};
