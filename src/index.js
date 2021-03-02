// Import the React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import faker from "faker";
import CommentDetail from "./CommentDetail";

// Create a react component
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Matt"/>
      <CommentDetail author="Gretchen"/>
      <CommentDetail author="Chubblin"/>
      <CommentDetail author="Bernie"/>
      <CommentDetail author="Yeti"/>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

if(module.hot){
  module.hot.accept();
}