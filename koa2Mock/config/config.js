module.exports  = {
    port: process.env.PORT || 8888,
    session: {
        key: 'issfan.com',
        maxAge: 86400000
    },
    mongodb: 'mongodb://198.181.36.251:27017/test',
    options: {
        useNewUrlParser: true,
        user: 'test',
        pass: 'test',
    }
}
