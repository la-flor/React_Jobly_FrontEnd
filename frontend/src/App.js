import { BrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import jwt from "jsonwebtoken";
import JoblyApi from "./api/api";
import UserContext from "./auth/UserContext";

import NavBar from "./NavBar";
import Routes from './Routes';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [userToken, setToken] = useLocalStorage(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  const [infoLoaded, setInfoLoaded] = useState(false);

  async function loginUser(data) {
    try {
      let token = await JoblyApi.login(data);

      setToken(token);

      return {success: true};
    } catch (errors) {
      console.error("Invalid username/password", errors);
      return {success: false, errors};
    }
  }

  async function signUp(data) {
    try {
      const userToken = await JoblyApi.signUp(data);
      setToken(userToken);

      return {success: true};
    } catch (errors) {
      console.error("Unable to create user.", errors);
      return {success: false, errors};
    }
  }

  async function logoutUser() {
    try {
      setCurrentUser(null);
      setToken(null);
      return {success: true};
    } catch (errors) {
      console.error("Unable to logout user.", errors);
      return {success: false, errors};
    }
  }

  useEffect(function loadUserInfo() {

    async function getCurrentUser() {
      if (userToken) {
        try {
          console.log(userToken)
          let { username } = jwt.decode(userToken);
          JoblyApi.token = userToken;
          let currentUser = await JoblyApi.getCurrentUser(username);
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
          console.log(userToken)
        } catch (err) {
          console.error("Unable to load user info.", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }

    setInfoLoaded(false);
    getCurrentUser();
  }, [userToken]);

  function hasAppliedToJob(id) {
    return applicationIds.has(id);
  }

  function applyToJob(id) {
    if (hasAppliedToJob(id)) return;
    JoblyApi.applyToJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  if (!infoLoaded) return <h1>Loading</h1>
  
  return (
    <>
      <BrowserRouter>
      <UserContext.Provider
            value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
          <NavBar logoutUser={logoutUser} />
          <div className="App">
            <Routes loginUser={loginUser} signUp={signUp} />
          </div>
      </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
