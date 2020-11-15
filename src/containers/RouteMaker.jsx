import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RouteMaker from "../components/RouteMaker";
import {getTaskGroups, logOut, visibleChanger} from "../store";

const mapStateToProps = state => ({
    isAuthenticated: state.authReducer.isAuthenticated,
    allGroups: state.taskReducer.allGroups
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getTaskGroups,
    logOut
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RouteMaker);