import React from "react";
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import {BrowserRouter, Link, Route, Switch} from 'react-router-dom';
import { AuthRoute } from '../utils/route_util';
import Splash from './splash/splash';
import CoinShow from './coins/coin_show';
import CoinIndex from './coins/coin_index';


const App = (props) => (
  <div>
    <header>
    <NavbarContainer/>
    </header>

  <Switch>
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <Route exact path="/" component={Splash} />
    <Route exact path="/coins" component={CoinIndex} />
  </Switch>
  </div>

);

export default App;