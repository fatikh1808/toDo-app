import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import NewTaskPage from "../pages/NewTaskPage";
import {addNewTask} from "../actions";

const mapStateToProps = state => ({
    users: state.authReducer.users,
    allGroups: state.taskReducer.allGroups
});

const mapDispatchToProps = dispatch => bindActionCreators({
    addNewTask
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewTaskPage);