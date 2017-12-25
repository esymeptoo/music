
import React, { Component } from 'react'

export default class MyInput extends React.Component {
    render() {
        return (
            <div style={{display: 'block'}}>
                <input type="text" placeholder="请输入" name="name" { ...this.props }/>
            </div>
        )
    }
}