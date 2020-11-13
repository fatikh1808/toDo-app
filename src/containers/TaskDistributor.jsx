import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TaskDistributor from "../pages/TaskDistributor";
import {getActiveTaskGroup, getAllTasks} from "../actions";

const mapStateToProps = state => ({
    id: state.authReducer.user.id,
    userName: state.authReducer.user.name,
    avatar: state.authReducer.user.avatar_url,
    allTasks: state.taskReducer.allTasks,
    activeGroupTasks: state.taskReducer.activeGroupTasks
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getAllTasks,
    getActiveTaskGroup
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskDistributor);