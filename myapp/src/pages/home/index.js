import React, { PureComponent } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from './style'
import List from './components/List'
import Topic from './components/Topic'
import Writer from './components/Writer'
import Recommend from './components/Recommend'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { BackTop } from './style'
import mola from '../../statics/write.png'

class Home extends PureComponent {


  handleScrollTop() {
    window.scrollTo(0, 0)
  }
 
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            alt=""
            className="banner-img"
            src={mola}
            alt=""
          ></img>
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到頂部</BackTop> : null}
       
      </HomeWrapper>
    );
  }
  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll",this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }

}

const mapStateToProps = (state) => ({
  showScroll: state.getIn(["home","showScroll"])
})

const mapDispatchToProps = (dispatch) => ({
  
  changeHomeData() {
      dispatch(actionCreators.getHomeInfo())
  },
  
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 50) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Home);
