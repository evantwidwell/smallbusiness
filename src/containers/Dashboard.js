import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeListing } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        listings: state.listings
    }
}

// add mapDispatchToProps function here
const mapDispatchToProps = (dispatch) => {
    return {
        removeListing: (index) => dispatch(removeListing(index))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)