import * as React from 'react'
import { connect } from 'react-redux'

const CommentList = ({comments}) => {
  const list = comments.map(comment => <li key={comment}>{comment}</li>)
  return (
    <ul className="comment-list">{list}</ul>
  )
}

const mapStateToProps = state => {
  return { comments: state.comments }
}

export default connect(mapStateToProps)(CommentList)