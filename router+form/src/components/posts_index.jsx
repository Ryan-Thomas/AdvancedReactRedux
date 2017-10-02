import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'
import { Link } from 'react-router-dom'
import { map } from 'lodash'

export class PostsIndex extends Component {
  componentDidMount() {
    console.log('fetching posts')
    this.props.fetchPosts()
  }

  renderPosts() {
    return map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      )
    })
  }
  
  render() {
    console.log('this.props.posts', this.props.posts)
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new" >Add a Post</Link>
        </div>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex)