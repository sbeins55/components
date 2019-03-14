import React from "react";
import ReactDOM from "react-dom";
import Faker from "faker";
import CommentDetail from "./CommentDetail";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        image={Faker.image.avatar()}
        author={Faker.name.firstName()}
        time={Faker.date.past().toLocaleString()}
        blog={Faker.lorem.sentence()}
      />
      <CommentDetail
        image={Faker.image.avatar()}
        author={Faker.name.firstName()}
        time={Faker.date.past().toLocaleString()}
        blog={Faker.lorem.sentence()}
      />
      <CommentDetail
        image={Faker.image.avatar()}
        author={Faker.name.firstName()}
        time={Faker.date.past().toLocaleString()}
        blog={Faker.lorem.sentence()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
