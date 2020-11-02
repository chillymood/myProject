import React, { PureComponent, Fragment } from "react";
import { ListItem, ListInfo, LoadMore, AuthorInfo } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store"
import { Link} from "react-router-dom"

class List extends PureComponent {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }
  render() {
    const {
      list,
      login,
      account,   
      delArticle,
    } = this.props;
    return (
      <Fragment>
        
        {list.map((item, index) => {
          return (
            <ListItem>
              <img alt="" className="pic" src={item.get("imageUrl")}></img>
              <Link key={index} to={"./detail/" + item.get("_id")}>
                <ListInfo>
                  <h3 className="title">{item.get("title")}</h3>
                  <p className="desc">{item.get("content")}</p>
                </ListInfo>
              </Link>
              <AuthorInfo>
                <span className="author">
                  <span className="iconfont">&#xe624;</span>
                  {item.get("username")}
                </span>

                <span className="time">
                  {item.get("createdAt").slice(11, 19)}
                </span>
                <span className="date">
                  {item.get("createdAt").slice(0, 10) + "-"}
                </span>

                {login && item.get("username") === account ? (
                  <span
                    className="del"
                    onClick={() => {
                      delArticle(item.get("_id"));
                    }}
                  >
                    刪除文章
                  </span>
                ) : null}
              </AuthorInfo>
            </ListItem>
          );
        })}

        <LoadMore onClick={this.handleScrollTop}>回到頂部</LoadMore>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  list: state.getIn(["home", "articleList"]),
  login: state.getIn(["login", "login"]),
  account: state.getIn(["login","account"])
});

const mapDispatchToProps = (dispatch) => ({
  delArticle(id) {
    dispatch(actionCreators.delArticle(id));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(List);
