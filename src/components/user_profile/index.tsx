import * as React from "react";
import { RouteComponentProps } from "react-router";
import { IUser } from "../../models/user";

interface MatchParams {
  id: string;
}

interface IUserProps extends RouteComponentProps<MatchParams> {
  loading: boolean;
  user: IUser | null;
  LoadUser(id: number): void;
}

export class User extends React.Component<IUserProps, {}> {

  public componentDidMount() {
    const { id } = this.props.match.params;

    this.props.LoadUser(Number(id));
  }

  public render(){
    const { loading, user } = this.props;
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