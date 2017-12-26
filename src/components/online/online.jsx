import React, { Component } from 'react';
import './index.less';

export default class Online extends Component {
    render() {
        let _router = this.props.location.pathname
        return (
            <div className="online-wrapper">
                <div className="second-nav">
                    <a href="#/music/index">
                        <div className={ _router == '/music/index'? 'second-nav-item second-active': 'second-nav-item'}>
                            音乐
                        </div>
                    </a>
                    <a href="#/music/video">
                        <div className={ _router == '/music/video'? 'second-nav-item second-active': 'second-nav-item'}>
                            视频
                        </div>
                    </a>
                    <a href="#/music/radio">
                        <div className={ _router == '/music/radio'? 'second-nav-item second-active': 'second-nav-item'}>
                            电台
                        </div>
                    </a>
                </div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}