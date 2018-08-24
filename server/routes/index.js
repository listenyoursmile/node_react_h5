
const Router = require('koa-router');
const koaCache = require('../middlewares/koa-cache');
// const fs = require('fs');
const router = new Router();

// const isDeveloping = process.env.NODE_ENV === 'development';
// const assets = !isDeveloping ? JSON.parse(fs.readFileSync('./dist/assets.json')) : null;

const startRouter = require('./start').default;
const detailRouter = require('./detail').default;
const loginRouter = require('./login').default;

startRouter(router, koaCache);
detailRouter(router, koaCache);
loginRouter(router, koaCache);

module.exports = router;