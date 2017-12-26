import React, { Component } from 'react'
import './index.less'
// import HOC from './HOC'
// import MyInput from './myInput'

import Header from '../components/header/header'
import SiderBar from '../components/siderbar/siderbar'

// const Example = HOC(MyInput)

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            siderBar: false
        }
    }
    handleSiderBarShow(val) {
        this.setState({
            siderBar: val
        })
    }
    render() {
        return (
            <div>
                <Header currentRouter={this.props.location.pathname} handleSiderBarShow={this.handleSiderBarShow.bind(this)} />
                <SiderBar expand={this.state.siderBar} handleSiderBarShow={this.handleSiderBarShow.bind(this)} />
                <div className="content">{this.props.children}</div>
                <div className="bottom-play-wrapper">
                    <audio controls="controls" src="http://m10.music.126.net/20171226151647/9f35b084f4c73fff9520cfdb71e7ac0d/ymusic/0504/484d/93a7/92b1bde9a2bb8048f14d4445def742b1.mp3" />
                </div>
            </div>
        )
    }
}
