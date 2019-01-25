import React, { Component } from 'react'
import './index.scss'

export default class Point extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        const {
            left,
            top,
            shine
        } = this.props
        const styles = {
            left: `${left}px`,
            top: `${top}px`,
            opacity: shine ? '0.8' : '0.1',
        }
        return (
            <div className="clock1-items" style={styles}>
                <div className="clock1-point" />
            </div>
        )
    }
}
