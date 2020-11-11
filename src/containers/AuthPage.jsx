import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AuthPage from '../pages/AuthPage';
import {login, signUp} from "../actions";

const mapStateToProps = state => ({
    users: state.authReducer.users
});

const mapDispatchToProps = dispatch => bindActionCreators({
    login,
    signUp
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AuthPage);