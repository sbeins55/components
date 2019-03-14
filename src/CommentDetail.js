import React from "react";
import Faker from "faker";

const CommentDetail = props => {
  console.log(props);
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={Faker.image.avatar()} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">{props.author}</a>
        <div className="metadata">
          <span className="date">{props.time}</span>
        </div>
        <div className="text">{props.blog}</div>
      </div>
    </div>
  );
};

export default CommentDetail;
