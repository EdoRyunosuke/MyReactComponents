import React, { Component } from 'react'

export default class Clock extends Component {
    constructor (props) {
        super(props)
        this.state = {
            date: 0, 
            year: 0, 
            month: 0, 
            daynum: 0, 
            hour: 0,
            minute: 0,
            second: 0,
            day: '',
            interval: false}
        let curDate = new Date()
        
        this.getClocks ()
        this.timerId = 0;
    }

    getClocks () {
        let curDate = new Date()

        this.setState({
            date: curDate.getDate(),
            year: curDate.getFullYear(),
            month: curDate.getMonth(),
            daynum: curDate.getDay(),
            hour: curDate.getHours(),
            minute: curDate.getMinutes(),
            second: curDate.getSeconds(),
        })
    }

    switchday () {
        switch(this.state.daynum) {
            case 1:
                this.setState({day: '月曜'})
                break
            
            case 2:
                this.setState({day: '火曜'})
                break

            case 3:
                this.setState({day: '水曜'})
                break
            
            case 4:
                this.setState({day: '木曜'})
                break
            
            case 5:
                this.setState({day: '金曜'})
                break
            
            case 6:
                this.setState({day: '土曜'})
                break

            case 7:
                this.setState({day: '日曜'})
                break
        }
    }

    componentWillMount () {
        this.timerId = setInterval (e => {this.tick()}, 1000)
      }
      
    componentWillUnmount () {
        clearInterval(this.timerId)
      }
      
    tick () {
        this.getClocks()
        this.switchday()
      }


    render () {
        return (
            <div>
                <h1>{this.state.hour}:{this.state.minute}:{this.state.second}</h1><br/>
                <h2>{this.state.day}, {this.state.year}/{this.state.month}/{this.state.date}</h2>
            </div>
        )
    }
}
