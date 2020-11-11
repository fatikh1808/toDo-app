import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RouteMaker from "../components/RouteMaker";

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouteMaker);