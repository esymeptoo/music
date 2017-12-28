import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Index from './Index.jsx'
import { Second } from './Second'
import '../libs/mixin.less'
import '../libs/styles.less'


export default class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="app-container">
                <Switch>
                    {/*  */}
                    <Route path="/" component={Index} />
                    <Route path="/second" component={Second} />
                </Switch>
            </div>
        )
    }
}