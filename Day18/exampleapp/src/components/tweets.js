import React from "react";
import "./tweets.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";

const Tweets = (props) => {
  return (
    <div className="container">
      <div className="section-one">
        <div className="mainName">
          <h4>{props.tweet.name}</h4>
        </div>
        <div className="twitterHandle">
          <h6>{props.tweet.twitterhandle}</h6>
        </div>
      </div>
      <div className="content">{props.tweet.tweet}</div>
      <div className="action">
        <button onClick={() => props.handleLike(props.tweet.id)}>
          <FontAwesomeIcon icon={faThumbsUp} />

          {/* <i className="fa-solid fa-thumbs-up"></i> */}
        </button>
        <button onClick={() => props.handleDisLike(props.tweet.id)}>
          {/* <i className="fa-solid fa-thumbs-down"></i> */}
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
        <h5>
          <span className="badge bg-secondary">{props.tweet.likes}</span>
        </h5>
      </div>
    </div>
  );
};

export default Tweets;
