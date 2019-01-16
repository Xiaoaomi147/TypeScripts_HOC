module.exports = {
    no : async ( ctx ) => {
        ctx.body = {
            Message: "Failed",
        }
    },
    ok : async ( ctx, data ) => {
        ctx.body = {
            Message: "Success",
            data
        }
    }
}
