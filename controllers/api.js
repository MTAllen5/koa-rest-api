const products = require('../db/products');
const labels = require('../db/labels');
const videos = require('../db/videos');
const comments = require('../db/comments');

const APIError = require('../rest').APIError;

module.exports = {
    // 'GET /api/products': async (ctx, next) => {
    //     ctx.rest({
    //         products: products.getProducts()
    //     });
    // },

    'POST /api/products': async (ctx, next) => {
        var p = products.createProduct(ctx.request.body.name, ctx.request.body.manufacturer, parseFloat(ctx.request.body.price));
        ctx.rest(p);
    },

    'DELETE /api/products/:id': async (ctx, next) => {
        console.log(`delete product ${ctx.params.id}...`);
        var p = products.deleteProduct(ctx.params.id);
        if (p) {
            ctx.rest(p);
        } else {
            throw new APIError('product:not_found', 'product not found by id.');
        }
    },

    'GET /api/labels': async (ctx, next) => {
        ctx.rest({
            Success: true,
            Object: labels.getLabels(),
            Message: ''
        })
    },

    'GET /api/videos': async (ctx, next) => {
        let pageIndex = ctx.query.pageIndex,
            pageSize = ctx.query.pageSize,
            totalCount,
            list = await videos.getVideos()

        list = list.filter(item => {
            return item.Title.includes(ctx.query.Keyword) && item.Topic.includes(ctx.query.Topic)
        })

        totalCount = list.length
        list = list.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
        ctx.rest({
            Success: true,
            Object: {
                PageIndex: pageIndex,
                PageSize: pageSize,
                TotalCount: totalCount,
                FrontCoverList: list
            },
            Message: ''
        })
    },

    'GET /api/comments': async (ctx, next) => {
        let pageIndex = ctx.query.pageIndex,
            pageSize = ctx.query.pageSize,
            totalCount,
            list = await comments.getComments()

        totalCount = list.length
        list = list.slice(pageIndex * pageSize, (pageIndex + 1) * pageSize)
        ctx.rest({
            Success: true,
            Object: {
                PageIndex: pageIndex,
                PageSize: pageSize,
                TotalCount: totalCount,
                Comments: list
            },
            Message: ''
        })
    },

    'POST /api/threadId': async (ctx, next) => {
        ctx.rest({
            Success: true,
            Object: 3391,
            Message: ''
        })
    }
};
