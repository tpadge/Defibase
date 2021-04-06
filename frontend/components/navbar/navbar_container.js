import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Navbar from './navbar_container';

const mSTP = (state) => {
  return {
    currentUser: state.entities.users[state.session.id] //KEYING IN?? state.session.cU
  };
};

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mSTP, mDTP)(Navbar);
