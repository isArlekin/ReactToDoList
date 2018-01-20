import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './index.scss';
import Root from './components/test/test';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app-mtd')
    );
};

render(Root);

if (module.hot) {
    module.hot.accept('./components/test/test', () => { render(Root) });
}