const jwt  = require('jsonwebtoken');
const config = require('../config/config');

const secret = config.tokenSecret

const expiresIn = config.tokenExpiresIn

module.exports = {
    //注册token
    createToken: async userInfo => {
        const token = jwt.sign(userInfo, secret, { expiresIn })
        return token;
    },
    //检验token
    verifyToken: async token => {
        if (!token) {
            return false
          }
        try {
            const result = jwt.verify( token, secret )
            return result
        } catch {
            return false
        }
    },
    expiresIn
}