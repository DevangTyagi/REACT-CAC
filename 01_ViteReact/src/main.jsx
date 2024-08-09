import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

function MyApp() {
  return (
    <div>
      <h1>Custom App</h1>
    </div>
  );
}

// const reactElement = {     //Unacceptable by the React
//     type : 'a',
//     props : {
//         href : 'https://google.com',
//         target : '_blank',
//     },
//     children : 'CLICK ME to visit google '
// }

// ***************************** Making Of a React Element *****************************

const reactElement = React.createElement(
  //Syntax for creating React element
  "a", //first line is always p tag or a tag
  {
    href: "https://google.com", //second line will contain an object that will define the properties of element
    target: "_blank",
  },
  "click me to visit google" //Third line will contain normal clickacle text
);
const another_element = (    // Pure html is accepted
  <a href="http://google.com" target="_blank">
    Visit Google
  </a>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);   //Cannot render object directly,need to declare element
