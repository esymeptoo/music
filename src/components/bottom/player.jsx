import React, { Component } from 'react'

export default class Player extends Component {
    render() {
        return (
            <div>
                <audio controls="controls" autoPlay src={this.props.currentPlaySrc} style={{display: 'none'}} />
            </div>
        )
    }
}