import { connect } from 'react-redux';
import Login from '../components/Login/Login';
// import { userLogin } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     userLogin: (user) => dispatch(userLogin(user))
//   }
// }

export default connect(mapStateToProps)(Login);