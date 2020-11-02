import React, { PureComponent } from "react";
import { RecommendWrapper, RecommendItem, Introduce, Scratch } from "../style";
import { connect } from "react-redux";
import site1 from "../../../statics/site1.png";
import site2 from "../../../statics/site2.png";
import site3 from "../../../statics/site3.png";
import site4 from "../../../statics/site4.png";
import site5 from "../../../statics/site5.png";
import site6 from "../../../statics/site6.png";

class Recommend extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecommendWrapper>
        <h1>本站功能說明</h1>
        <Introduce>
          多人創作平台，大部分功能需要用戶先註冊並登入。登入後可以寫下新文章，左上角能選擇看全部文章或只看自己文章，若是自己的文章，在文章列表中可以選擇刪除，進入文章後能進行編輯。
          <p>試用帳號：claire 密碼:aaa 也歡迎自行註冊</p>
          <p>本站技術要點：</p>
          <p>前端使用React、Redux</p>
          <p>後端使用Node.js之Koa2框架</p>
          <p>串接MongoDB資料庫</p>
          <p>使用Nginx網頁伺服器與GCP雲端主機</p>
        </Introduce>
        <h1>作品網站連結</h1>
        <RecommendItem>
          <a href="http://35.229.221.230:82/">
            <img src={site1}></img>
          </a>
          <p>前端使用React.js</p>
          <p>應用Ant Design組件庫，Ajax串接外網API</p>
        </RecommendItem>
        <RecommendItem>
          <a href="http://35.229.221.230:81/">
            <img src={site2}></img>
          </a>
          <p>原生Html、CSS、JavaScript所作動畫頁面</p>
          <p>BEM設計模式使命名易讀</p>
        </RecommendItem>
        <RecommendItem>
          <a href="http://35.229.221.230:81/RWD/index.html">
            <img src={site6}></img>
          </a>
          <p>使用借鑒Bootstrap之Grid system</p>
          <p>RWD響應式布局網頁</p>
        </RecommendItem>
        <RecommendItem>
          <a href="http://35.229.221.230:81/cssForme/cssWork.html">
            <img src={site3}></img>
          </a>
          <p>HTML、CSS切版廣告頁</p>
        </RecommendItem>
        <RecommendItem>
          <a href="http://35.229.221.230:81/javaGame/index.html">
            <img src={site4}></img>
          </a>
          <p>使用Java與多人合作開發遊戲</p>
          <p>Bitbucket多人協作git版本控制</p>
        </RecommendItem>
        <RecommendItem>
          <a href="https://scratch.mit.edu/projects/351789399/">
            <img src={site5}></img>
          </a>
          <p>以程式思維做的完整Scartch遊戲</p>
        </RecommendItem>
      </RecommendWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  list: state.getIn(["home", "RecommendList"]),
});

export default connect(mapStateToProps, null)(Recommend);
