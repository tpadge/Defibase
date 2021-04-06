import React from "react";
import NavbarContainer from './navbar/navbar';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {Route, Switch} from 'react-router-dom';
import { AuthRoute } from '../utils/route_util';

const App = (props) => (
  <div>
    <header>
    <h1>Defibase</h1>
    <NavbarContainer />
    </header>

  <Switch>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </Switch>
  </div>

);

export default App;