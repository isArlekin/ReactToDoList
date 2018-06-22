import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import '../client/components/app.scss';

import configStore from "./configStore";
import {Provider} from "react-redux";

import AppRoot from "./containers/app.container";


const store = configStore();

const render = App => {
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('born-to-do')
    );
};

render(AppRoot);

if (module.hot) {

    //todo Should I add other components to this section?
    module.hot.accept('./components/dashboard/dashboard', () => { render(AppRoot) });
}