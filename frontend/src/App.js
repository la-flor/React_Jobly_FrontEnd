import './App.css';
import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';
import JoblyApi from "./api/api";

import NavBar from "./NavBar";
import Routes from './Routes';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  async function loginUser(data) {
    try {
      const userToken = await JoblyApi.login(data);
      setLoggedIn(loginStatus => true);

      return {success: true};
    } catch (errors) {
      console.error("Invalid username/password", errors);
      return {success: false, errors};
    }
  }

  async function signUp(data) {
    try {
      const userToken = await JoblyApi.signUp(data);
      setLoggedIn(loginStatus => true);

      return {success: true};
    } catch (errors) {
      console.error("Unable to create user.", errors);
      return {success: false, errors};
    }
  }
  
  return (
    <>
      <BrowserRouter>
          <NavBar loggedIn={loggedIn} />
          <div className="container">
            <Routes loginUser={loginUser} signUp={signUp} />
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
