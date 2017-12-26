import React, { Component } from 'react'
import './index.less'

export default class Header extends Component {
    shouldComponentUpdate (nextProps, nextState) {
        return true
    }
    // 父组件向子组件传props时触发   params: 即将改变的props
    componentWillReceiveProps (nextProps) {
        
    }
    render() {
        return (
            <div className="header_container">
                <div className="first-nav">
                    <img src={require('../../assets/list.png')} alt="" className="list-icon" onClick={() => {this.props.handleSiderBarShow(true)}}/>
                    <div className="middle-menu">
                        <a href="#/local">
                            <img src={this.props.currentRouter.indexOf('/local') > -1? require("../../assets/music_light.png"): require("../../assets/music_dark.png")} alt=""/>
                        </a>
                        <a href="#/music">
                            <img src={this.props.currentRouter.indexOf('/music') > -1? require("../../assets/header2_light.png"): require("../../assets/header2_dark.png")} alt=""/>
                        </a>
                        <a href="#/group">
                            <img src={this.props.currentRouter.indexOf('/group') > -1? require("../../assets/group_light.png"): require("../../assets/group_dark.png")} alt=""/>
                        </a>
                    </div>
                    <img src={require("../../assets/search.png")} alt="" className="search-icon"/>
                </div>
            </div>
        )
    }
}