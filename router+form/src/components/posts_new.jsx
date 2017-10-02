import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

export class PostsNew extends Component {
  // renderTitleField takes a parameter of field
  // field contains some event handlers that we need to wire up to the JSX that we are returning
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input 
          type="text"
          className="form-control"
          // field.input is an object which contains a bunch of different event-handlers like onchange, onblur...
          {...field.input}
        />
      </div>
    )
  }


  render() {
    return (
      <form>
        <Field
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          label="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm',
})(PostsNew)
