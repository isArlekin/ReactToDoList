import React from "react";
import Note from "../note/note";

import styles from "./noteList.scss";

export default class NoteList extends React.Component {
    createNote(note, i) {
        return (<Note note={note} key={i}></Note>);
    }

    render() {
        return (
            <div className={styles.list}>
                {this.props.notes.map(this.createNote.bind(this))}
            </div>
        );
    }
}