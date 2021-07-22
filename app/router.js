import Router from 'koa-router';
import combineRouters from 'koa-combine-routers';
import { selectController, insertController } from './controller/testcontroller.js';


const router = new Router();

const defaultRouter = combineRouters( router);

router.get('/ultra', selectController);     // bus api
router.post('/create', insertController);







export default defaultRouter;