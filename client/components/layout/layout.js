import React from 'react';
import styles from './layout.scss';

import Header from "../header/header";
import Dashboard from "../dashboard/dashboard";

export default class AppRoot extends React.Component {

    render() {
        return (<div className={styles.layout}>
            <Header></Header>
            <Dashboard></Dashboard>

            {this.props.test}
        </div>);
    }
}