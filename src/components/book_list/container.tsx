import { connect } from 'react-redux';
import { BooksList } from './index';
import { IState, TThunkDispatch } from '../../store/types';
import { LoadBooks } from '../../store/book_list/index';
import { Dispatch } from 'redux';


export const BooksListContainer = connect(
  (state: IState) => {
    return {
      ...state.books,
    }
  },
  (dispatch: TThunkDispatch) => {
    return {
      LoadBooks: () => dispatch(LoadBooks()),
    }
  }
)(BooksList);