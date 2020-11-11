import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TaskDistributor from "../pages/TaskDistributor";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskDistributor);