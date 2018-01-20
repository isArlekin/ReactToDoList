import React from 'react';
import styles from './test.scss';
import testImg from '../../images/test_small.png';


export default class App extends React.Component {
    constructor() {
        super();
        this.state = { name: "Kitty" };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler() {
        this.setState({ name: "Bunny" });
    }

    render () {
        return ( <h1 className={styles.test} onClick={this.clickHandler}>
            {`Hello ${this.state.name}!`}

            <img src={testImg} alt="Test"/>
        </h1>);
    }
}