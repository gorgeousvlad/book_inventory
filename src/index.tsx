import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import { UserList } from "./components/user_list";
import { UserProfile } from "./components/user_profile";

ReactDOM.render(
  <Router>
    <>
      <div><Link to='/list'>Show Profiles List</Link></div>
      <Route path='/list' component={UserList}/>
      <Route path='/profile/:id' component = {UserProfile}/>
    </>
  </Router>,
  document.getElementById('app-container'),
);
