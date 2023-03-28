import React from "react";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage/signUpForm";
import Navigation from "./components/Navigation";
import HomePageSideBar from "./components/HomePageSideBar/SideBarIndex";
import HomePage from "./components/HomePageSideBar/SideBarIndex";
import TopBar from "./components/HomePageTopBar/homePageTopBar";
import PlayBar from "./components/PlayBar/PlayBar";
import SongsIndexItem from "./components/Songs/SongsIndexItem";
import SongsIndex from "./components/Songs/SongsIndex";
import SideBarIndex from "./components/HomePageSideBar/SideBarIndex";
import Body from "./components/HomePageBody/HomePageBody";
import AlbumShowPage from "./components/AlbumShow/albumShow";


function App() {
  return (
    <>
      {/* <Navigation /> */}
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          {/* <Route path="/songs/:songId">
              <SongsIndexItem/>
              <PlayBar/>
              <TopBar/>
              <SideBarIndex/>
          </Route> */}
          <Route path="/albums/:albumId">
              <AlbumShowPage/>
              <PlayBar/>
              <TopBar/>
              <SideBarIndex/>
          </Route>
          <Route path="/albums">
              {/* <HomePageSideBar /> */}
              {/* <PlayBar/> */}
              <TopBar/>
              <SideBarIndex/>
              <Body/>
              {/* <Navigation/> */}
              {/* <SongsIndex/> */}
          </Route>
          
        </Switch>
    </>
  );
}

export default App;