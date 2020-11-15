import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TaskDistributor from "../pages/TaskDistributor";
import {getActiveTaskGroup, getAllTasks, visibleChanger, logOut} from "../store";

const mapStateToProps = state => ({
    id: state.authReducer.user.id,
    userName: state.authReducer.user.name,
    avatar: state.authReducer.user.avatar_url,
    allTasks: state.taskReducer.allTasks,
    activeGroupTasks: state.taskReducer.activeGroupTasks,
    isVisible: state.visibleChanger.isVisible
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getAllTasks,
    getActiveTaskGroup,
    visibleChanger,
    logOut
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskDistributor);