import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import NavBar from "./components/navbar/NavBar";

import Profile from "./components/profile/Profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <NavBar />
        <div className="content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                messageData={props.messageData}
                dialogsData={props.dialogsData}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile postsData={props.postsData} />}
          />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
