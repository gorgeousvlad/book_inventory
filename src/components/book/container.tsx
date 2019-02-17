import { connect } from 'react-redux';
import { IState, TThunkDispatch } from '../../store/types';
import { LoadBook } from '../../store/book';
import { Book } from '.';


export const BookContainer = connect(
  (state: IState) => {
    return {
      ...state.book,
    }
  },
  (dispatch: TThunkDispatch) => {
    return {
      LoadBook: (id: string) => dispatch(LoadBook(id)),
    }
  }
)(Book);