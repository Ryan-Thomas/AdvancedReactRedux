import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

export class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts
  }
  
  render() {
    return (
      <div>
        Posts Index
      </div>
    )
  }
}

export default connect(null, { fetchPosts })(PostsIndex)