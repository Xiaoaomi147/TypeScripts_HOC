const bcrypt = require('bcryptjs');
const UserModel = require('../models/user');
const responseTemplate = require('../lib/responseTemplate');
const tokenService = require('../lib/token');
const redis = require('../models/redis');
module.exports = {
    create: async ctx => {
        const salt = await bcrypt.genSalt( 10 );
        let { name, password, phone, city, isAdmin = false } = ctx.request.body;
        password = await bcrypt.hash( password, salt );
        const user = {
            name,
            password,
            phone,
            city,
            isAdmin,
        };
        const result = await UserModel.create( user );
        return responseTemplate.ok( ctx, result );
    },
    signin: async ctx => {
        const { name, password } = ctx.request.body;
        const user = await UserModel.findOne({ name });
        if (user && await bcrypt.compare(password, user.password)) {
            const userinfo = {
                name,
                timestamp: (new Date()).valueOf()
            }
            const token = await tokenService.createToken( userinfo );
            ctx.session.user = {
                _id: user._id,
                phone: user.phone,
                isAdmin: user.isAdmin,
                city: user.city,
            };
            redis.set('token', token, 'EX', tokenService.expiresIn, () => {

            })
            console.log('获取请求 URL',ctx.url)
            console.log('请求方法',ctx.method)
            console.log('请求标头对象',ctx.header)
            console.log('获取完整的请求URL',ctx.href)
            return responseTemplate.ok( ctx, token );
        } else {
            ctx.assert(ctx.state.user, 401, 'User not found. Please login!');
            return responseTemplate.no( ctx );
        }
    }
}
