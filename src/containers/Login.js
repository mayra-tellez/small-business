import { connect } from 'react-redux';
import Login from '../components/Login/Login';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Login);