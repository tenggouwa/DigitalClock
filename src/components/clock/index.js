import React, { Component } from 'react'
import ClockItem from '@/components/clockItem'
import './index.scss'

export default class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            shineLight: []
        }
    }
    componentDidMount() {
        this.filterNum(0)
    }
    componentWillReceiveProps(props) {
        if (this.props.num !== props.num) this.filterNum(props.num)
    }
    filterNum = (e) => {
        if (e === 0) this.setState({ shineLight: [1, 0, 1, 1, 1, 1, 1] })
        if (e === 1) this.setState({ shineLight: [0, 0, 0, 0, 1, 0, 1] })
        if (e === 2) this.setState({ shineLight: [1, 1, 1, 0, 1, 1, 0] })
        if (e === 3) this.setState({ shineLight: [1, 1, 1, 0, 1, 0, 1] })
        if (e === 4) this.setState({ shineLight: [0, 1, 0, 1, 1, 0, 1] })
        if (e === 5) this.setState({ shineLight: [1, 1, 1, 1, 0, 0, 1] })
        if (e === 6) this.setState({ shineLight: [1, 1, 1, 1, 0, 1, 1] })
        if (e === 7) this.setState({ shineLight: [1, 0, 0, 0, 1, 0, 1] })
        if (e === 8) this.setState({ shineLight: [1, 1, 1, 1, 1, 1, 1] })
        if (e === 9) this.setState({ shineLight: [1, 1, 1, 1, 1, 0, 1] })
    }
    render() {
        const { shineLight } = this.state
        const { left } = this.props
        const styles = {
            left: `${left}px`,
        }
        return (
            <div className="clock" style={styles}>
                <ClockItem type="horizontal" left={0} top={0} shine={shineLight[0]} />
                <ClockItem type="horizontal" left={0} top={170} shine={shineLight[1]} />
                <ClockItem type="horizontal" left={0} top={340} shine={shineLight[2]} />
                <ClockItem type="vertical" left={-85} top={85} shine={shineLight[3]} />
                <ClockItem type="vertical" left={85} top={85} shine={shineLight[4]} />
                <ClockItem type="vertical" left={-85} top={255} shine={shineLight[5]} />
                <ClockItem type="vertical" left={85} top={255} shine={shineLight[6]} />
            </div>
        )
    }
}
