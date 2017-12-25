import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import routes from './routes'
import { Router, hashHistory } from 'react-router'

import App from './containers/App.jsx'

// import configureStore from './store'

// const store = configureStore();

ReactDOM.render(
    <Router history={hashHistory}>
        {routes}
    </Router>
    // <App/>
    , document.getElementById('root')
)


/**
 * react-router会将props之类的属性直接注入组件 实现路由跳转。。。
 * 
 */
