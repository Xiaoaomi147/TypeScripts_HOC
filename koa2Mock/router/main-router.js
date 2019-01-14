const KoaRouter = require('koa-router');
const controllers = require('../controllers/index');
const router = new KoaRouter();

router
    .prefix('/api')
    // .get('/subcontractors/sites/:id', controllers.onlytest.clearCache)
    .get('/create', controllers.user.create)
    .post('/create', controllers.user.create)
    .post('/signin', controllers.user.signin)
    // .post('/trades/get-trades', controllers.onlytest.trades)
    // .post('/employees/recognition', controllers.onlytest.recognition)
    // .post('/login', controllers.onlytest.login)
module.exports = router
