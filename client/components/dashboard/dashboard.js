import React from "react";
import styles from  "./dashboard.scss";
import {connect} from "react-redux";
import {ADD_NOTE} from "../../actions/dasboardActions";
import NoteList from "../noteList/noteList";

class Dashboard extends React.Component {
    
    render() {
        return (<div className={styles.content}>
            <button onClick={this.props.addNote}>Create Note</button>

            <NoteList notes={this.props.notes}></NoteList>
        </div>);
    }
}

function mapStateToProps (state) {
    return {
        notes: state.notes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addNote: () => {
            dispatch({
                type: ADD_NOTE
            });
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);