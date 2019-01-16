const env = process.env;
module.exports  = {
    port: process.env.PORT || 8888,
    session: {
        key: 'issfan.com',
        maxAge: 86400000
    },
    mongoHost: env.mongoHost || '198.181.36.251',
    mongoDatabase: env.mongoDatabase || 'test',
    mongoPort: env.mongoPort || 27017,
    options: {
        useNewUrlParser: true,
        user: 'test',
        pass: 'test',
    },
    redisHost: env.redisHost || '198.181.36.251',
    redisPort: env.redisPort || 6379,
    redisPassword: env.redisPassword || 'redis',
    
    tokenSecret: env.tokenSecret || 'test',
    tokenExpiresIn: env.tokenExpiresIn || 3600,
}
