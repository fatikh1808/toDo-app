import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import TaskDistributor from "../pages/TaskDistributor";
import {getAllTasks} from "../actions";

const mapStateToProps = state => ({
    id: state.authReducer.user.id,
    userName: state.authReducer.user.name,
    avatar: state.authReducer.user.avatar_url,
    allTasks: state.taskReducer.allTasks
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getAllTasks
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskDistributor);