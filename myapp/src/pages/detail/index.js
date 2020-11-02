import React, { Component } from "react";
import { DetailWrapper, Header, Content, Image, Textarea, Button, AuthorInfo } from "./style"
import { connect } from "react-redux"
import axios from "axios"
import { actionCreators } from "./store"
import { withRouter, Redirect } from "react-router-dom"


class Detail extends Component {
  
  backHome(){
      return (
        <Redirect to={{ pathname: "/"}} />
      );
    }

  render() {
    const {
      login,
      account,
      title,
      content,
      imageUrl,
      username,
      editStatus,
      editArticle,
      changeDetailEditStatus,
    } = this.props;

    

    
   
     
    return (
      <DetailWrapper>
        <Header>{title}</Header>

        <AuthorInfo>
          <span className="iconfont">&#xe624;</span>
          <span className="username">{username}</span>
          {login && account === username ? (
            <span
              className="edit"
              onClick={() => {
                changeDetailEditStatus(1);
              }}
            >
              編輯文章
            </span>
          ) : null}
        </AuthorInfo>

        <img src={imageUrl} />
        {editStatus === 1 ? (
          <Textarea
            ref={(dom) => {
              this.contentValue = dom;
            }}
          >
            {content}
          </Textarea>): null}
        {editStatus === 0||editStatus ===2? <Content /*dangerouslySetInnerHTML={ {__html: content} }*/>
            {content}
          </Content>:null }
          
        
        {editStatus ===1? (
          <Button
            onClick={() => {
              editArticle(this.props.match.params.id, this.contentValue.value);
              changeDetailEditStatus(0)
            }}
          >
            修改完成
          </Button>
        ) : null}
        {editStatus===2? this.backHome(): null}
      </DetailWrapper>     
    );
  }
  componentDidMount() {
    this.props.getDetail(this.props.match.params.id);
    
  }
}

const mapStateToProps = (state) => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"]),
  imageUrl: state.getIn(["detail", "imageUrl"]),
  username: state.getIn(["detail", "username"]),
  editStatus: state.getIn(["detail", "editStatus"]),
  login: state.getIn(["login", "login"]),
  account: state.getIn(["login", "account"]),
});

const mapDispatchToProps = (dispatch) => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))   
  },
  editArticle(id, content) {
    dispatch(actionCreators.editArticle(id, content))
  },
  changeDetailEditStatus(editStatus) {
    dispatch(actionCreators.changeDetailEditStatusAction(editStatus));
  },
})


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));
