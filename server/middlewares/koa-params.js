
const urlParams = require('../../src/utils/params-util').default;
const koaParams = (options) => {
    return async (ctx, next) => {
        const url = ctx.originalUrl || ctx.url;
        ctx.param = urlParams(url);
        await next();
    }
}

module.exports = koaParams;