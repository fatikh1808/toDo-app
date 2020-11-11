import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UsersPage from "../pages/UsersPage";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersPage);