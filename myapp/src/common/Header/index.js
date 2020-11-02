import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { actionCreators as loginActionCreators } from "../../pages/login/store"
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from "./style";
import { actionCreator } from "./store";
import { Link } from "react-router-dom";

class Header extends Component {
  getSearchInfo(show) {
    const {
      list,
      focused,
      page,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;
    const newList = list.toJS();
    const pageList = [];

    for (let i = (page - 1) * 10; i < page * 10; i++) {
      pageList.push(<SearchInfoItem key={[i]}>{newList[i]}</SearchInfoItem>);
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            熱門搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage(page, totalPage, this.spinIcon)}
            >
              <span
                ref={(icon) => {
                  this.spinIcon = icon;
                }}
                className="iconfont spin"
              >
                &#xe851;
              </span>
              換一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>{pageList}</SearchInfoList>
        </SearchInfo>
      );
    } else return null;
  }

  render() {
    const {
      focused,
      handleInputFocus,
      handleInputBlur,
      list,
      login,
      logOut,
      account, 
      lookSelfArticle,
      lookAllArticle
    } = this.props;
    return (
      <HeaderWrapper>
        <Nav>
          <Link to="/">
            <NavItem className="left active">首頁</NavItem>
          </Link>
          <Link to="/">
            <NavItem className="left" onClick={lookAllArticle}>
              全部文章
            </NavItem>
          </Link>
          {login ? (
            <Link to="/">
              <NavItem className="left" onClick={lookSelfArticle}>
                {account + "的文章"}
              </NavItem>
            </Link>
          ) : (
            <NavItem className="left noPoint">請先登入</NavItem>
          )}
          <NavItem className="right"></NavItem>

          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            <span
              className={focused ? "iconfont focused zoom" : "iconfont zoom"}
            >
              &#xe721;
            </span>
            {this.getSearchInfo(focused)}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to="/register">
            <Button className="reg">註冊</Button>
          </Link>
          {login ? (
            <Button className="reg" onClick={logOut}>
              退出
            </Button>
          ) : (
            <Link to="/login">
              <Button className="reg">
                <span className="iconfont">&#xe636;</span>登入
              </Button>
            </Link>
          )}
          <Link to="/write">
            <Button className="writting">
              <span className="iconfont">&#xe624;</span>寫文章
            </Button>
          </Link>
        </Addition>
      </HeaderWrapper>
    );
  }
}

//將取到的state值映射到props
const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
    list: state.getIn(["header", "list"]),
    page: state.getIn(["header", "page"]),
    mouseIn: state.getIn(["header", "mouseIn"]),
    totalPage: state.getIn(["header", "totalPage"]),
    login: state.getIn(["login", "login"]),
    account: state.getIn(["login", "account"]),
  };
};
//使prop中的方法能調用dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreator.getheaderList());
      dispatch(actionCreator.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreator.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreator.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreator.mouseLeave());
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/gi, "");
      console.log(originAngle);
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)";

      if (page < totalPage) {
        dispatch(actionCreator.changePage(page + 1));
      } else {
        dispatch(actionCreator.changePage(1));
      }
    },
    logOut() {
      //引用他處的actionCreacter
      dispatch(loginActionCreators.logOut())
    },
    lookSelfArticle() {
      dispatch(actionCreator.lookSelfArticle())
    },
    lookAllArticle() {
      dispatch(actionCreator.lookAllArticle());
    }
  };

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
