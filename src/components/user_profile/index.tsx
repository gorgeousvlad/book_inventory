import * as React from "react";
import { RouteComponentProps } from "react-router";
// const userData = require('../../data/users.json');

interface MatchParams {
  id: string;
}

interface IUserProfileProps extends RouteComponentProps<MatchParams> {
}

export class UserProfile extends React.Component<IUserProfileProps,{}> {
  render(){
    console.log(this.props)
    const { id } = this.props.match.params;
    // const {users} = userData
    return (
      // <div>User: {users[id].name}</div>
      <div>User</div>
    )
  }
}