import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import routes from './routes'
import { Router, hashHistory } from 'react-router'

import App from './containers/App'

// import configureStore from './store'

// const store = configureStore();

ReactDOM.render(
    <Router history={hashHistory}>
        {routes}
    </Router>
    // <App/>
    , document.getElementById('root')
)


