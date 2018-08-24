
const koaUA = (options) => {
    return async (ctx, next) => {
        const userAgent = ctx.header['user-agent'] || '';
        ctx.isXXXApp = /test1|test2/i.test(userAgent);
        await next();
    }
}

module.exports = koaUA;
