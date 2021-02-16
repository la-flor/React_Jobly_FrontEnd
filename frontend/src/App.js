import './App.css';
import { BrowserRouter } from "react-router-dom";
import React, { useState } from 'react';
import JoblyApi from "./api/api";

import NavBar from "./NavBar";
import Routes from './Routes';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [userToken, setToken] = useLocalStorage(null);

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
  
  return (
    <>
      <BrowserRouter>
          <NavBar userToken={userToken} />
          <div className="container">
            <Routes loginUser={loginUser} signUp={signUp} />
          </div>
      </BrowserRouter>
    </>
  );
}

export default App;
