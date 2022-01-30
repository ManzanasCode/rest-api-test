import { Router } from 'express'
import { login } from '../controllers/login.controller'

const router = Router();

router.route('/rings-api/admin/doLogin').post(login);

router.route('/rings-api/admin/doLogin2').get(login);





export default router;