import { connect } from 'react-redux'
import AddListing from '../components/AddListing'
import { addListing } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
      user: state.user,
      listings: state.listings
  }
}
// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
      addListing: (user) => dispatch(addListing(user)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddListing)