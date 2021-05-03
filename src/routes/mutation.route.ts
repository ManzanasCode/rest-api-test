import { Router } from 'express'
import { processMutation } from '../controllers/mutation.controller'

const router = Router();

router.route('/mutation')
    .post(processMutation);
    
export default router;