import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserPage from "../pages/UserPage";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserPage);