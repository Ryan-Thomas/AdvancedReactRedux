import * as React from 'react'

export default class CommentBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = { comment: '' }
  }
  
  handleChange = (event) => {
    this.setState({comment: event.target.value })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ comment: '' })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="comment-box">
        <textarea 
          value={this.state.comment} 
          onChange={this.handleChange} 
        />
        <button action="submit">Submit Comment!</button>
      </form>
    )
  }
}
