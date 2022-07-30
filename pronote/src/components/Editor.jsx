import React, { Component } from 'react'
import './Editor.css'

export default class Editor extends Component {

    constructor() {
        super();
    }

    state = {
        value: ""
    }

    handleChange = (event) => {
        // console.log("Change happened" + event.target);
        this.setState({
            value : event.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <div className="input">
                    <h3>Input</h3>
                    {/* call the handleChange method in the onChange event and set the default value as empty */}
                    <textarea className="input-text" onChange={this.handleChange} defaultValue={this.state.value} />
                </div>
                <div className="output">
                    <h3>Pro Note</h3>
                    <div className="output-text">{this.state.value}</div>
                </div>
            </div>
        )
    }
}


