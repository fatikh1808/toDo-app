import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TaskPage from "../pages/TaskPage";
import {getActiveTask, taskDone} from "../store";

const mapStateToProps = state => ({
    avatar: state.authReducer.user.avatar_url,
    activeTask: state.taskReducer.activeTask
});

const mapDispatchToProps = dispatch => bindActionCreators({
    taskDone,
    getActiveTask
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskPage);