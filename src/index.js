import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let postsData = [
  { id: 1, message: "Hi. It's me.", likeCount: 15 },
  { id: 2, message: "Where are you.", likeCount: 20 },
  { id: 3, message: "Call me plz.", likeCount: 7 },
  { id: 4, message: "Sorry.", likeCount: 1 },
];

let dialogsData = [
  { id: 1, name: "Sasha" },
  { id: 2, name: "Vita" },
  { id: 3, name: "Oleg" },
  { id: 4, name: "Sveta" },
  { id: 5, name: "Petro" },
  { id: 6, name: "Sasha" },
  { id: 7, name: "Max" },
];

let messageData = [
  { id: 1, message: "Hi. It's me." },
  { id: 2, message: "Where are you." },
  { id: 3, message: "Call me plz." },
  { id: 4, message: "Sorry." },
];

ReactDOM.render(
  <React.StrictMode>
    <App
      postsData={postsData}
      dialogsData={dialogsData}
      messageData={messageData}
    />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
