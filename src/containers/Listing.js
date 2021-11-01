import { connect } from 'react-redux';
import Listing from '../components/Listing/Listing';
import { deleteListing } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
    businesses: state.businesses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteListing: (index) => dispatch(deleteListing(index))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Listing);