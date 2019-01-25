import React, { Component } from 'react'
import Clock from '@/components/clock'
import Point from '@/components/points'
import { browserRedirect } from '@/assets/common'
import './home.scss'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            win: '',
            hour1: 0,
            hour2: 0,
            minute1: 0,
            minute2: 0,
            second1: 0,
            second2: 0
        }
    }
    componentDidMount() {
        this.init()
    }
    setClockTime = () => {
        const myDate = new Date()
        let hour = String(myDate.getHours())
        let minute = String(myDate.getMinutes())
        let second = String(myDate.getSeconds())

        if (hour.length === 1) hour = '0' + hour
        if (minute.length === 1) minute = '0' + minute
        if (second.length === 1) second = '0' + second
        this.setState({
            hour1: Number(hour.split('')[0]),
            hour2: Number(hour.split('')[1]),
            minute1: Number(minute.split('')[0]),
            minute2: Number(minute.split('')[1]),
            second1: Number(second.split('')[0]),
            second2: Number(second.split('')[1]),
        })
    }
    init = () => {
        this.setState({ win: browserRedirect() })
        setInterval(() => {
            this.setClockTime()
        }, 1000)
    }
    render() {
        const {
            hour1,
            hour2,
            minute1,
            minute2,
            second1,
            second2,
            win
        } = this.state
        return (
            <div className="section" style={win === 'true' ? { transform: 'scale(0.1)' } : null}>
                <Clock left={50} num={hour1} />
                <Clock left={280} num={hour2} />
                <Point left={455} top={130} type="point" shine />
                <Point left={455} top={210} type="point" shine />
                <Clock left={550} num={minute1} />
                <Clock left={780} num={minute2} />
                <Point left={955} top={130} type="point" shine />
                <Point left={955} top={210} type="point" shine />
                <Clock left={1050} num={second1} />
                <Clock left={1280} num={second2} />
            </div>
        )
    }
}
