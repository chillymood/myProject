import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input, Button,Textarea,Dialog } from "./style";
import { actionCreators } from "./store";
import { Link, Redirect } from "react-router-dom";

class Write extends PureComponent {

  //如果發表成功跳回首頁
  changePostStatus() {
    if (this.props.postStatus === 1) return <Redirect to={{ pathname: "/" }} />;
  }

  render() {
    const { postArticle, postStatus, renewPostStatus, login } = this.props;

    if (login) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="標題"
              ref={(dom) => {
                this.title = dom;
              }}
            />
            <Input
              placeholder="欲插入之圖片網址 http://............"
              ref={(dom) => {
                this.imgUrl = dom;
              }}
            />
            <Textarea
              placeholder="文章內容"
              ref={(dom) => {
                this.content = dom;
              }}
            />

            <Button
              onClick={() => {
                return postArticle(
                  this.title.value,
                  this.content.value,
                  this.imgUrl.value
                );
              }}
            >
              發表文章
            </Button>
            {postStatus==1? this.changePostStatus():null}
            {postStatus == 2 ? <Dialog>發表失敗，再試一次</Dialog> : null}
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = (state) => ({
  postStatus: state.getIn(["write", "postStatus"]),
  login: state.getIn(["login","login"])
});

const mapDispatchToProps = (dispatch) => ({
  postArticle(title, content, imgUrl) {
    dispatch(actionCreators.postArticle(title, content, imgUrl))
  },
  renewPostStatus() {
    dispatch(actionCreators.postArticleAction(0))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Write);
