import React, { PureComponent, Fragment } from 'react';
import { TopicWrapper, TopicItem } from "../style"
import {connect} from "react-redux"

class Topic extends PureComponent {
  render() {
    const { topicList } = this.props;
    return (
      <Fragment>
        <TopicWrapper>
          {this.props.topicList.map((item, index) => {
            return (
              <TopicItem key={index}>
                <img className="topic-pic" src={item.get("imgUrl")} alt="" />
                {item.get("title")}
              </TopicItem>
            );
          })}
        </TopicWrapper>
      </Fragment>
    );
  }
}
    
const mapStateToProps = (state) => ({
    topicList: state.get('home').get('topicItem')
})


export default connect(mapStateToProps, null)(Topic);
