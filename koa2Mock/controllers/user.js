const bcrypt = require('bcryptjs');
const UserModel = require('../models/user');
const responseTemplate = require('../lib/responseTemplate');
const Message = {
    Success:'Success',
    Failed:'Failed'
};
module.exports = {
    create: async (ctx, next) => {
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
    signin: async (ctx, next) => {
        const { name, city } = ctx.request.body;
        const user = await UserModel.findOne({ name });
        console.log(user);
        if (user && await bcrypt.compare(city, user.city)) {
            ctx.session.user = {
                _id: user._id,
                phone: user.phone,
                isAdmin: user.isAdmin,
                city: user.city,
            };
            return responseTemplate.ok( ctx, Message.Success, true );
        } else {
            return responseTemplate.ok( ctx, Message.Failed, false );
        }
    }
}
