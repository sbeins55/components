import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          image={Faker.image.avatar()}
          author={Faker.name.firstName()}
          time={Faker.date.past().toLocaleString()}
          blog={Faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={Faker.image.avatar()}
          author={Faker.name.firstName()}
          time={Faker.date.past().toLocaleString()}
          blog={Faker.lorem.sentence()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          image={Faker.image.avatar()}
          author={Faker.name.firstName()}
          time={Faker.date.past().toLocaleString()}
          blog={Faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
