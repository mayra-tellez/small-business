import { connect } from 'react-redux';
import AddListing from '../components/AddListing/AddListing';
import { addListing, deleteListing } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addListing: (listing) => dispatch(addListing(listing)),
    deleteListing: (index) => dispatch(deleteListing(index))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(AddListing);