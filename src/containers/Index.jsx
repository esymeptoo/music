import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import './index.less'
// import HOC from './HOC'
// import MyInput from './myInput'

import Header from '../components/header/header'
import SiderBar from '../components/siderbar/siderbar'

import Local from '../components/local/local.jsx'
import Online from '../components/online/online.jsx'

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
                <div className="content">
                    <Switch>
                        <Route path="/local" component={Local}/>
                        <Route path="/music" component={Online}/>
                        <Route path="/group" component={Local}/>
                        <Redirect to="/music" />
                    </Switch>
                </div>
            </div>
        )
    }
}
