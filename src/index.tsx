import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from './store/index';
import { history } from './utils/history';
import { BooksListContainer } from './components/book_list/container';
import { BookContainer } from './components/book/container';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <>
        <div><Link to='/books'>Book inventory</Link></div>
        <Route path='/books' component={BooksListContainer}/>
        <Route path='/book/:id' component = {BookContainer}/>
      </>
    </Router>
  </Provider>,
  document.getElementById('app-container'),
);
