import React, { Component } from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom'
import './index.less';

import OnlineMusic from '../content/music.jsx'
import OnlineVideo from '../content/video.jsx'
import OnlineRadio from '../content/radio.jsx'

export default class Online extends Component {
    render() {
        let _router = this.props.location.pathname
        return (
            <div className="online-wrapper">
                <div className="second-nav">
                    <Link to="/music/index">
                        <div className={ _router == '/music/index'? 'second-nav-item second-active': 'second-nav-item'}>
                            音乐
                        </div>
                    </Link>
                    <Link to="/music/video">
                        <div className={ _router == '/music/video'? 'second-nav-item second-active': 'second-nav-item'}>
                            视频
                        </div>
                    </Link>
                    <Link to="/music/radio">
                        <div className={ _router == '/music/radio'? 'second-nav-item second-active': 'second-nav-item'}>
                            电台
                        </div>
                    </Link>
                </div>
                <div>
                    <Switch>
                        <Route path="/music/index" component={OnlineMusic}/>
                        <Route path="/music/video" component={OnlineVideo}/>
                        <Route path="/music/radio" component={OnlineRadio}/>
                        <Redirect to="/music/index" />
                    </Switch>
                </div>
            </div>
        )
    }
}