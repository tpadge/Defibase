import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Navbar from './navbar';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id] //KEYING IN? state -> entities -> users -> id
  };                                                  //using currentUser in appl.html.erb + entry
};                                                    //using currentUser in navbar ternary, logout passed thru dispatch

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Navbar);
