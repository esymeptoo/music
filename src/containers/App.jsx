import React, { Component } from 'react'
import '../libs/mixin.less'
import '../libs/styles.less'

export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="app-container">{this.props.children}</div>
            </div>
        )
    }
}