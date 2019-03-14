import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  function getContent() {
    return (
      <CommentDetail
        image={Faker.image.avatar()}
        author={Faker.name.firstName()}
        time={Faker.date.past().toLocaleString()}
        blog={Faker.lorem.sentence()}
      />
    );
  }

  return (
    <div className="ui container comments">
      <ApprovalCard content={getContent()} />
      <ApprovalCard content={getContent()} />
      <ApprovalCard content={getContent()} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
