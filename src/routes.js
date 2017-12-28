import React from 'react'
import { Router, Route, Link, hashHistory, IndexRedirect, IndexRoute, browserHistory } from 'react-router-dom'
import App from './containers/App'
import Index from './containers/Index.jsx'
import Local from './components/local/local.jsx'
import Online from './components/online/online.jsx'
import OnlineMusic from './components/content/music.jsx'
import OnlineVideo from './components/content/video.jsx'
import OnlineRadio from './components/content/radio.jsx'

//这里IndexRoute入在根app下后，就是在App页面组件的props.children
//匹配规则参考官方文档
// 此处为多级路由
export default (
  <App>
    <Route path="/local" component={Local} />
    <Route path="/music" component={Online} />
    <Route path="/group" component={Local} />
  </App>
  // <Route path="/" component={App}>
  //   <IndexRedirect to="/local" />

  //   <Route path="/" component={Index}> 

  //     <Route path="/local" component={Local}/>

  //     <Route path="/music" component={Online}>
  //       <IndexRedirect to="/music/index" />
  //       <Route path="/music/index" component={OnlineMusic} />
  //       <Route path="/music/video" component={OnlineVideo} />
  //       <Route path="/music/radio" component={OnlineRadio} />
  //     </Route>

  //     <Route path="/group" component={Local}/>
  //   </Route>

  // </Route>
)

//  let routes = [
//   {
//     path: '/',
//     component: Index,
//     routes: [
//       {
//         path: '/music',
//         component: Online
//       }, {
//         path: '/local',
//         component: Local
//       }, {
//         path: '/group',
//         component: Local
//       }
//     ]
//   }
// ]

// const RouteWithSubRoutes = (route) => (
//   <Route path={route.path} render={props => (
//     // pass the sub-routes down to keep nesting
//     <route.component {...props} routes={route.routes}/>
//   )}/>
// )