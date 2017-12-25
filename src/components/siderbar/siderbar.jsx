import React, { Component } from 'react'
import './index.less'

export default class SiderBar extends React.Component {
    constructor(props) {
        super(props)
    }
    stopSelfPropagation (e) {
        e.stopPropagation()
    }
    render() {
        return (
            <div className={this.props.expand ? 'siderbar-container expand' : 'siderbar-container unexpand'} onClick={() => {this.props.handleSiderBarShow(false)}}>
                <div className="siderbar-main" onClick={(e) => {this.stopSelfPropagation(e)}}></div>
            </div>
        ) 
    }
}