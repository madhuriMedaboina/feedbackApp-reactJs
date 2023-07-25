// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {givingFeedback: false}

  clickImage = () => {
    this.setState({givingFeedback: true})
  }

  getFeedback = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="bg-container">
        <div className="emojis-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="emoji-list">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  type="button"
                  onClick={this.clickImage}
                  className="button"
                >
                  <img
                    src={emoji.imageUrl}
                    alt={emoji.name}
                    className="emoji-img"
                  />
                  <br />
                  <span className="emoji-name">{emoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  thankyou = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="bg-container">
        <div className="thankyou-container">
          <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
          <h1 className="love-heading">Thank you!</h1>
          <p className="para">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {givingFeedback} = this.state
    return givingFeedback ? this.thankyou() : this.getFeedback()
  }
}
export default Feedback
