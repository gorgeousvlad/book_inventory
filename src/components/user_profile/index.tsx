import * as React from "react";
import { RouteComponentProps } from "react-router";
import { IUser } from "../../models/user";
import { getUser } from "../../api";

interface MatchParams {
  id: string;
}

interface IUserProfileProps extends RouteComponentProps<MatchParams> {
}

interface IUserProfileState {
  loading: boolean;
  user: IUser | {};
}

export class UserProfile extends React.Component<IUserProfileProps, IUserProfileState> {
  public state = {
    user: {},
    loading: false,
  }

  public componentDidMount() {
    const { id } = this.props.match.params;

    this.setState({loading: true})
    getUser(Number(id)).then((user: IUser) => {
      this.setState({ user, loading: false});
    });
  }

  public render(){
    const { loading, user } = this.state;
    return (
      <div>
        {loading
        ? <div>Loading...</div>
        : Object.keys(user).length &&
          <div>
            {(user as IUser).name}
          </div>
        }
      </div>
    )
  }
}