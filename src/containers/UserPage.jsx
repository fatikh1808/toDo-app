import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserPage from "../pages/UserPage";
import {visibleChanger} from "../store";

const mapStateToProps = state => ({
    isVisible: state.visibleChanger.isVisible,
    user: state.authReducer.user
});

const mapDispatchToProps = dispatch => bindActionCreators({
    visibleChanger
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage);