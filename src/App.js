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
    
      <div className="wrapper">
        <Header />
        <NavBar />
        <div className="content">
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.dialogsPage} sendMessage={props.sendMessage} />}
          />
          <Route
            path="/profile"
          render={() => <Profile state={props.state.profilePage} addPost={props.addPost}
            updateNewPostText={props.updateNewPostText} />}
          />
        </div>
        <Footer />
      </div>
    
  );
};

export default App;
