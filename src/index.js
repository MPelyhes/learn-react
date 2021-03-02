// Import the React and ReactDom Libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Matt"
        timeAgo="Today at 4:45PM"
        commentText="Hey, this is great!"
        imgSrc={faker.image.image()}
      />
      <CommentDetail
        author="Gretchen"
        timeAgo="Today at 2:13PM"
        commentText="I love Chubblin and Chunklin"
        imgSrc={faker.image.image()}
      />
      <CommentDetail
        author="Chubblin"
        timeAgo="Yesterday at 9:56PM"
        commentText="Woof!"
        imgSrc={faker.image.image()}
      />
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));

if (module.hot) {
  module.hot.accept();
}
