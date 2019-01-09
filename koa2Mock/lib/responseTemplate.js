module.exports = {
    no : async (ctx,msg) => {
        ctx.body = {
            statusCode: 500,
            Message: msg,
            data: null
        }
    },
    ok : async ( ctx, Message, data ) => {
        ctx.body = {
            statusCode: 200,
            Message,
            data
        }
    }
}
