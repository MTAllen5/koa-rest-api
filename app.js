const Koa = require('koa');

const koaCors = require('koa2-cors');

const bodyParser = require('koa-bodyparser');

const controller = require('./controller');

const rest = require('./rest');

const app = new Koa();

app.use(koaCors({
    origin: function (ctx) {
        let pathPrefix = '/api/'
        if (ctx.request.path.startsWith(pathPrefix)) {
            return '*'
        }
        return 'http://localhost:3001'
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'], //设置允许的HTTP请求类型
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// parse request body:
app.use(bodyParser());

// bind .rest() for ctx:
app.use(rest.restify());

// add controllers:
app.use(controller());

app.listen(3001);
console.log('app started at port 3001...');
