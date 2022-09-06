import { Router } from 'express'
import { test, getAllBooks, findById, update, deleteBook, insert} from '../controllers/books.controller'

const router = Router();

router.route('/books/').get(getAllBooks);
router.route('/books/id/:idbook').get(findById);
router.route('/books/update').put(update);
router.route('/books/delete').delete(deleteBook);
router.route('/books/update').post(insert);






export default router;