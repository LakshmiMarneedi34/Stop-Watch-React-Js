// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timeInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeId)
  }

  renderMinutes = () => {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  renderSeconds = () => {
    const {timeInSeconds} = this.state
    const seconds = Math.floor(timeInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  startButton = () => {
    this.timeId = setInterval(this.runClock, 1000)
  }

  runClock = () => {
    this.setState(prevState => ({timeInSeconds: prevState.timeInSeconds + 1}))
  }

  stopButton = () => {
    clearInterval(this.timeId)
  }

  resetButton = () => {
    this.setState({timeInSeconds: 0})
    clearInterval(this.timeId)
  }

  render() {
    const displayText = `${this.renderMinutes()}:${this.renderSeconds()}`

    return (
      <div className="app-container">
        <div className="stop-watch-container">
          <h1 className="heading">StopWatch</h1>
          <div className="timer-container">
            <div className="stopwatch-card-header">
              <img
                className="image"
                alt="stopwatch"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              />
              <p className="text">Timer</p>
            </div>
            <h1 className="timer-count">{displayText}</h1>
            <div className="buttons-container">
              <button
                type="button"
                className="start-button button"
                onClick={this.startButton}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.stopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.resetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
