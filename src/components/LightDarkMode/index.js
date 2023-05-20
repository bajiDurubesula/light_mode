// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {changeBackground: true}

  mode = () => {
    this.setState(prevState => ({changeBackground: !prevState}))
  }

  render() {
    const {changeBackground} = this.state
    const containerColor = changeBackground ? 'light' : 'dark'
    const textColor = changeBackground ? 'light' : 'dark'
    const buttonText = changeBackground ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`inner-container ${containerColor}`}>
          <h1 className={`title ${textColor}`}>Click To Change Mode</h1>
          <button type="button" className="button" onClick={this.mode}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
