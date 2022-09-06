import { Router } from 'express'
import { test } from '../controllers/books.controller'

const router = Router();

router.route('/rings-api/admin/test').post(test);






export default router;