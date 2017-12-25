import React, { Component } from 'react'
import HOC from './HOC'
import MyInput from './myInput'

const Example = HOC(MyInput)

export default class Index extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Example />
            </div>
        )
    }
}
