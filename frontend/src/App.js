import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/signUpForm";
import Navigation from "./components/Navigation";
import HomePageSideBar from "./components/HomePageSideBar";
import HomePage from "./components/HomePageSideBar/index";
import TopBar from "./components/HomePageTopBar/homePageTopBar";


function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/">
              {/* <HomePageSideBar /> */}
              <TopBar/>
              <HomePage/>
          </Route>
        </Switch>
    </>
  );
}

export default App;