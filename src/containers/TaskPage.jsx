import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TaskPage from "../pages/TaskPage";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskPage);