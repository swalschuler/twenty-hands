import React, { Component } from "react";
import { connect } from "react-redux";

import ClipItem from "./ClipItem";

class ClipList extends Component {
  renderList() {
    return this.props.clips.map(clip => {
      console.log(clip);
      const { title, description, thumbnails } = clip.snippet;
      return (
        <div key={clip.id.videoId} className="ui relaxed divided list">
          <ClipItem
            title={title}
            description={description}
            thumbnail={thumbnails.default.url}
            videoId={clip.id.videoId}
          />
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { clips: Object.values(state.clips) };
};

export default connect(mapStateToProps)(ClipList);
