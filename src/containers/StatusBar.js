import { connect } from 'react-redux';
import StatusBar from '../components/StatusBar/StatusBar';

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(StatusBar);