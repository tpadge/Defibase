import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';



const mSTP = (state) => {

  return {
    errors: state.errors.session,
    formType: 'login',
    navLink: <Link to="/signup"> or Get Started</Link>
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: () => dispatch(login({ email: "kilativ@hte.eth", password: "sendit" }))
  };
};

export default connect(mSTP, mDTP)(SessionForm);