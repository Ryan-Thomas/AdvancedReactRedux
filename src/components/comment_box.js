import * as React from 'react'
import { connect } from 'react-redux'
import { saveComment } from '../actions/index'

class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { comment: '' }
  }

  handleChange = (event) => {
    this.setState({comment: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <div>
          <button action="submit">Submit Comment!</button>
        </div>
      </form>
    )
  }
}

export default connect(null, { saveComment })(CommentBox)