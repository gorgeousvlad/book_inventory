import * as express from 'express';
import { getBooks, addBook, deleteBook, updateBook, getPages } from './routes';

const router = express.Router();

router.route('/get-books').get(getBooks);
router.route('/add-book').post(addBook);
router.route('/delete-book').get(deleteBook);
router.route('/update-book').post(updateBook);
router.route(['/', '/books', '/book/:id']).get(getPages);

export { router };