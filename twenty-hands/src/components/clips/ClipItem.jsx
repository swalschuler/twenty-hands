import "../../css/VideoItem.css";
import React from "react";
import { connect } from "react-redux";

import { chooseClip } from "../../actions";

const ClipList = (props) => {
  return (
    <div
      className="video-item item"
      onClick={() => props.chooseClip(props.videoId)}
    >
      <img
        className="ui image"
        src={props.thumbnail}
        alt={`Thumbnail for the video ${props.title}`}
      />
      <div className="content">
        <div className="header">{props.title}</div>
      </div>
    </div>
  );
};

export default connect(null, {
  chooseClip,
})(ClipList);
