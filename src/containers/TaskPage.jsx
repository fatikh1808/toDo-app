import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TaskPage from "../pages/TaskPage";
import {logOut, getActiveTask, taskDone, visibleChanger} from "../store";

const mapStateToProps = state => ({
    avatar: state.authReducer.user.avatar_url,
    activeTask: state.taskReducer.activeTask,
    isVisible: state.visibleChanger.isVisible
});

const mapDispatchToProps = dispatch => bindActionCreators({
    taskDone,
    getActiveTask,
    visibleChanger,
    logOut
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskPage);