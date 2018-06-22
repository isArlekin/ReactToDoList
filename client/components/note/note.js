import React from "react";
import styles from "./note.scss"

export default class Note extends React.Component {
    render() {
        const note = this.props.note;

        return (
            <div className={styles.note}>
                <div className={styles.headerText}>
                    <h2 className={styles.headerText}>{note.title}</h2>
                </div>
                <div className={styles.body}>
                    {note.text}
                </div>
            </div>
        );
    }
}