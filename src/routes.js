import React from 'react'
import { Router, Route, Link, hashHistory, IndexRedirect, IndexRoute, browserHistory } from 'react-router'
import App from './containers/App'
import Index from './containers/Index.jsx'

//这里IndexRoute入在根app下后，就是在App页面组件的props.children
//匹配规则参考官方文档
export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/index" />
    <Route path="/index" component={Index} />
  </Route>
)