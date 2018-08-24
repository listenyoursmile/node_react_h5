
const routeNotFount = (options) => {
    return async (ctx, next) => {
        if (ctx.status === 404) {
            ctx.redirect(options.redirect || '/');
            ctx.status = 302;
        } else {
            await next();
        }
    }
};

module.exports = routeNotFount;