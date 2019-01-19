import * as express from 'express';
import { getBooks, addBook, deleteBook, updateBook, getPages, getUser, getUserList } from './routes';

const router = express.Router();

router.route('/get-books').get(getBooks);
router.route('/add-book').post(addBook);
router.route('/delete-book').get(deleteBook);
router.route('/update-book').post(updateBook);
router.route(['/', '/list', '/profile/:id']).get(getPages);
router.route('/get-user').get(getUser);
router.route('/get-user-list').get(getUserList);


export { router };