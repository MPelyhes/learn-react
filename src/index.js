// Import the React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
  const buttonText = 'Touch My Button!';

  return (
   <div>
    <label className="label" for="name">Enter name: </label>
    <input id="name" type="text"/>
    <button style={{backgroundColor: 'salmon', color: 'blue'}}>{buttonText}</button>
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