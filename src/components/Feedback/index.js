// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: true}

  onSelectedEmoji = () => this.setState({isFeedbackSelected: false})

  renderEmojiSection = () => {
    const {feedbackData} = this.props
    const {emojis} = feedbackData

    return (
      <div>
        <h1 className="heading">
          How satisfied are you with our customer support performance?
        </h1>
        <ul className="feedback-question">
          {emojis.map(each => (
            <li
              key={each.id}
              className="emoji-section"
              onClick={this.onSelectedEmoji}
            >
              <img src={each.imageUrl} alt={each.name} className="emoji" />
              <p className="title">{each.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderFeedback = () => {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData
    return (
      <div className="feedback-section">
        <img src={loveEmojiUrl} alt="loveEmoji" className="emoji" />
        <h1 className="thank-you">Thank You!</h1>
        <p className="feedback-summary">
          We will use your feedback to improve our customer support performance.
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state
    return (
      <div className="feedback-app-container">
        <div className="feedback-container">
          {isFeedbackSelected
            ? this.renderEmojiSection()
            : this.renderFeedback()}
        </div>
      </div>
    )
  }
}
export default Feedback
