import React from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import state, { subcscribe } from "./redux/state";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { addPost, updateNewPostText } from "./redux/state";
import { sendMessage } from "./redux/state";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App state={state} addPost={addPost}
          sendMessage={sendMessage}
          updateNewPostText={updateNewPostText} />
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById("root")
  );  
}

rerenderEntireTree(state);

subcscribe(rerenderEntireTree)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
