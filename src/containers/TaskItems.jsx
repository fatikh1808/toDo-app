import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TaskItems from "../components/TaskItems";

const mapStateToProps = state => ({
    allTasks: state.taskReducer.allTasks
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskItems);