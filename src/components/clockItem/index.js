import React, { Component } from 'react'
import './index.scss'

export default class ClockItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount() {
    }
    render() {
        const {
            type,
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
            <div className="clock-items">
                {
                    type === 'horizontal' ?
                        <div className="clock-item" style={styles} />
                        :
                        null
                }
                {
                    type === 'vertical' ?
                        <div className="clock-item standing" style={styles} />
                        :
                        null
                }
            </div>
        )
    }
}
