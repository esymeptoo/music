import React, { Component } from 'react'
import HOC from './HOC'
import MyInput from './myInput'

import Header from '../components/header/header'
import SiderBar from '../components/siderbar/siderbar'

const Example = HOC(MyInput)

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            siderBar: false
        }
    }
    handleSiderBarShow (val) {
        this.setState({
            siderBar: val
        })
    }
    render() {
        return (
            <div>
                <Header currentRouter={this.props.route.path}  handleSiderBarShow={ this.handleSiderBarShow.bind(this) }/>
                <SiderBar expand={this.state.siderBar} handleSiderBarShow={ this.handleSiderBarShow.bind(this) }/>
            </div>
        )
    }
}
