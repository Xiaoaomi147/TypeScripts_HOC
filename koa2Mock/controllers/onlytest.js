
const responseTemplate = require('../lib/responseTemplate');
const Message = {
    Success:'Success',
    Failed:'Failed'
};
module.exports = {
    // clearCache: async ctx => {
    //     const { id } = await ctx.params;
    //     if(id === 'CWR16061660'){
    //         return responseTemplate.ok(ctx,Message.Success , recognitionData )
    //     }else {
    //         return responseTemplate.ok(ctx,Message.Failed,'参数错误')
    //     }


    // },
    // trades:  ctx => {
    //     return responseTemplate.ok(ctx,Message.Success, tradesData)
    // },
    // recognition: ctx => {
    //     const { cwrNum } = ctx.request.body;
    //     if(cwrNum === 'CWR16061660'){
    //         return responseTemplate.ok(ctx,Message.Success , recognitionData )
    //     }else{
    //         return responseTemplate.ok(ctx,Message.Success , 'NotData' )
    //     }

    // },
    // login: ctx => {
    //     const { PassWd, UserName } = ctx.request.body;
    //     const acceptsLanguages = ctx.request.acceptsLanguages();

    //     console.log(acceptsLanguages[0]);
    //     console.log(PassWd, UserName);
    //     if(PassWd == '111111' &&  UserName == "admin@internal.com"){
    //         ctx.body = loginData;
    //     }
    // }

}
