import { Router } from 'express'
import { processMutation, getMutationStats } from '../controllers/mutation.controller'

const router = Router();

router.route('/mutation')
    .post(processMutation);


    router.route('/stats')
    .get(getMutationStats);
    
export default router;