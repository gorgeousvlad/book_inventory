import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import { configureStore } from './store/index';
import { UserListContainer } from './components/user_list/container';
import { UserContainer } from './components/user_profile/container';
import { history } from './utils/history';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <>
        <div><Link to='/list'>Show Profiles List</Link></div>
        <Route path='/list' component={UserListContainer}/>
        <Route path='/profile/:id' component = {UserContainer}/>
      </>
    </Router>
  </Provider>,
  document.getElementById('app-container'),
);
