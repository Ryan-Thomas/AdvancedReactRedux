import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// The Switch Element is for selecting the first Route that matches the current url path
// If you jsut pasted the Routes without the Switch tag, React would display ALL of the 
// Components whose paths were loosely matched by the current url path
// Since we only want to display one element depending on the current route, we use 
// the Switch tag to implement that logic
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from './reducers';
import PostsIndex from './components/posts_index'
import PostsNew from './components/posts_new'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch> 
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
