import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/signUpForm";
import Navigation from "./components/Navigation";
import HomePageSideBar from "./components/HomePageSideBar";

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
            <div>
              <h1>Shpotify home page</h1>
            </div>
          </Route>
        </Switch>
    </>
  );
}

export default App;