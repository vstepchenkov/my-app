import React from "react";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/reduxStore";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App state={state} dispatch={store.dispatch.bind(store)} />
      </Provider>  
    </BrowserRouter>,
    document.getElementById("root")
  );  
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
