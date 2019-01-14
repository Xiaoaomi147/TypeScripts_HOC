const bcrypt = require('bcryptjs');
const UserModel = require('../models/user');
const responseTemplate = require('../lib/responseTemplate');
const Message = {
    Success:'Success',
    Failed:'Failed'
};
module.exports = {
    create: async ctx => {
        const salt = await bcrypt.genSalt( 10 );
        let { name, phone, city, isAdmin = false } = ctx.request.body;
        city = await bcrypt.hash( city, salt );
        const user = {
            name,
            phone,
            city,
            isAdmin,
        };
        const result = await UserModel.create( user );
        return responseTemplate.ok( ctx, Message.Success, result );
    },
    signin: async ctx => {
        const { name, city } = ctx.request.body;
        const user = await UserModel.findOne({ name });
        if (user && await bcrypt.compare(city, user.city)) {
            ctx.session.user = {
                _id: user._id,
                phone: user.phone,
                isAdmin: user.isAdmin,
                city: user.city,
            };
            console.log('获取请求 URL',ctx.url)
            console.log('请求方法',ctx.method)
            console.log('请求标头对象',ctx.header)
            console.log('获取完整的请求URL',ctx.href)
            return responseTemplate.ok( ctx, Message.Success, true );
        } else {
            ctx.assert(ctx.state.user, 401, 'User not found. Please login!');
            return responseTemplate.ok( ctx, Message.Failed, false );
        }
    }
}
