import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter, Route } from "react-router-dom";
import { addPost } from "./redux/state";
import { sendMessage } from "./redux/state";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App state={state} addPost={addPost} sendMessage={sendMessage}/>
    </BrowserRouter>  
  </React.StrictMode>,
  document.getElementById("root")
  );  
}


