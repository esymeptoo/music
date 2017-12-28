import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import Index from './Index.jsx'
import { Second } from './Second'
import '../libs/mixin.less'
import '../libs/styles.less'
import './App.less'


export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            play: {
                src: 'http://m10.music.126.net/20171228143011/cca3178b10e515433e04369594d3d64d/ymusic/8dee/352d/3785/c2eedc6b141a74ae6589b05b809f7578.mp3',
                cover: 'http://p3.music.126.net/UJUzDo4aoU4E4TUF7GcDLg==/109951163088086694.jpg?param=200y200',
                author: '韦礼安',
                name: '有没有'
            }
        }
    }
    controllPlay() {
        this.refs.audio.pause()
    }

    render() {
        return (
            <div className="app-container">
                <Switch>
                    <Route path="/" component={Index} />
                    <Route path="/second" component={Second} />
                </Switch>
                <div className="bottom-play-wrapper">
                    <img src={this.state.play.cover} alt="" className="cover"/>
                    <div className="play-data">
                        <p className="song-name">{this.state.play.name}</p>
                        <p className="song-author">{this.state.play.author}</p>
                    </div>
                    <div className="controll-box">
                        <i className="controll-btn" onClick={ () => {this.controllPlay()}}></i>
                        <i className="list-btn"></i>
                    </div>
                    <audio ref="audio" controls="controls" autoPlay src={this.state.play.src} />
                </div>
            </div>
        )
    }
}