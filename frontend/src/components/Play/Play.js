import React from "react";
import "./Play.styles.scss";
const Play = (props) => {
  return (
    <div className="trackList" key={props.track.id}>
      <h2>{props.track.track_name}</h2>
      {/* <p> {props.monster.email}</p> */}
    </div>
  );
};

export default Play;
