/**
 * react组件工厂模式解析 ---------HOC模式   受控组件
 */

import React, { Componemnt } from 'react'

/**
 * 
 * @param {*} WrapperComponent 引入的组件
 */

export default function HOC (WrapperComponent) {
    return class myHOC extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                name: 'esymeptoo'
            }
            this.onInputChange = this.onInputChange.bind(this)
        }
        onInputChange(e) {
            this.setState({
                name: e.target.value
            })
        }
        render() {
            const newProps = {
                value: this.state.name,
                onChange: this.onInputChange
            }
            return <WrapperComponent { ...this.props } { ...newProps }/>
        }
    }
}