import React from 'react';
import {
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import LoginForm from "./auth/LoginForm";
import Signup from "./auth/Signup";
import Companies from "./companies/Companies";
import Jobs from "./jobs/Jobs";
import Profile from "./profiles/Profile";

function Routes({loginUser, signUp}) {
  
  return (
    <Switch>
        <Route exact path="/login">
            <LoginForm loginUser={loginUser}/>
        </Route>
        <Route exact path="/signup">
            <Signup signUp={signUp} />
        </Route>
        <Route exact path="/companies">
            <Companies />
        </Route>
        <Route exact path="/jobs">
            <Jobs />
        </Route>
        <Route exact path="/profile">
            <Profile />
        </Route>
        <Redirect to="/login" />
    </Switch>
  );
}

export default Routes;
