import React from "react";
import styles from './header.scss';

export default class Header extends React.Component {
    render() {
        return (<div className={styles.content}>
            <div className={styles.leftSide}>
                <div className={styles.logo}>Born To Do</div>
                <div className={styles.search}></div>
            </div>
            <div className={styles.rightSide}>
                <div className={styles.buttonsRow}></div>
                <div className={styles.avatar}></div>
            </div>
        </div>);
    }
}