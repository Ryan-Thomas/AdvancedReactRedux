import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

export class PostsNew extends Component {
  // renderTitleField takes a parameter of field
  // field contains some event handlers that we need to wire up to the JSX that we are returning
  renderTitleField(field) {
    return (
      <div>
        <input 
          type="text"
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
          name="title"
          component={this.renderTitleField}
        />
      </form>
    )
  }
}

export default reduxForm({
  form: 'PostsNewForm',
})(PostsNew)
