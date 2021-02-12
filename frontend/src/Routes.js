import React from 'react';
import {
    Switch,
    Route,
    Redirect
  } from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import Companies from "./Companies";
import Jobs from "./Jobs";
import Profile from "./Profile";
import Login from "./Login";

function Routes({loginUser, signUp}) {
  
  return (
    <Switch>
        <Route exact path="/login">
            <Login loginUser={loginUser}/>
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
