import React, { Component } from 'react'

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