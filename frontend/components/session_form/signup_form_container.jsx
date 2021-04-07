import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mSTP = (state) => {
  return {
    errors: state.errors.session,
    formType: 'signup',
    navLink: <Link to="/login">or Log In</Link>,
  };
};

const mDTP = dispatch => {
  return {
    processForm: (user) =>  dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    demoLogin: () => dispatch(signup({ email: "kilativ@hte.eth", password: "sendit" }))
  };
};

export default connect(mSTP, mDTP)(SessionForm);