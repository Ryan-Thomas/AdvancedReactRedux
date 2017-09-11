import jsdom from 'jsdom'
import jquery from 'jquery'
import TestUtils from 'react-addons-test-utils'
import React from 'react'
import ReactDOM from 'react-dom'
import { expect } from 'chai'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from '../src/reducers'

// Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView
const $ = jquery(global.window) // A version of Jquery that uses the jsdom instead of the one in the browser

// build 'renderComponent' helper that should render a given react class
const renderComponent = (ComponentClass, props, state) => {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  )

  return $(ReactDOM.findDOMNode(componentInstance)) // Produces HTML
}

// Build helper for simulating events

// Set up chai-jquery
export { renderComponent, expect }
