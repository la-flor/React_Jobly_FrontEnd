import React from 'react';
import {
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import LoginForm from "./auth/LoginForm";
import Signup from "./auth/Signup";
import CompaniesList from "./companies/CompanyList";
import CompanyJobOpenings from "./companies/CompanyJobOpenings";
import Jobs from "./jobs/Jobs";
import Profile from "./profiles/Profile";
import HomePage from "./homepage/HomePage";
import PrivateRoute from "./PrivateRoute";

function Routes({loginUser, signUp}) {
  
  return (
    <Switch>
        <Route exact path="/login">
            <LoginForm loginUser={loginUser}/>
        </Route>
        <Route exact path="/signup">
            <Signup signUp={signUp} />
        </Route>
        <PrivateRoute exact path="/companies">
            <CompaniesList />
        </PrivateRoute>
        <PrivateRoute exact path="/jobs">
            <Jobs />
        </PrivateRoute>
        <PrivateRoute exact path="/profile">
            <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/companies/:handle">
            <CompanyJobOpenings />
        </PrivateRoute>
        <PrivateRoute exact path="/">
            <HomePage />
        </PrivateRoute>
        <Redirect to="/login" />
    </Switch>
  );
}

export default Routes;