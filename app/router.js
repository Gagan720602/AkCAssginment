import Router from 'koa-router';
import combineRouters from 'koa-combine-routers';
import { selectController, insertController , bookit, deleapi} from './controller/testcontroller.js';


const router = new Router();

const defaultRouter = combineRouters( router);

router.get('/getapi', selectController);   //get api
router.post('/postapi', insertController); // post api
router.put('/putapi', bookit);        //update api
router.put('/deleteapi', deleapi);







export default defaultRouter;