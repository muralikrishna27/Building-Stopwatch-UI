import React, { Component } from 'react';

import './Count.css';

class Count extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1000,
        }
        this.counter = null;
    }
    startCount = () => {
        this.counter = setInterval(() => this.setState({
            count: this.state.count + 1
        }), 1000)
    }
    stopCount = () => {
        clearInterval(this.counter)
    }

    render() {
        return (
            <div className="container">
                <div className="timer-container">
                    <div className="row timer-count">
                        <div className="text-center">
                            <h3 >${this.state.count}</h3>
                        </div>
                    </div>
                    <div className="row buttons-container">
                        <button className="btn btn-primary" onClick={this.startCount}>Start</button>
                        <button className="btn btn-primary" onClick={this.stopCount}>Stop</button>
                    </div>
                </div>



            </div>
        )
    }
}

export default Count;