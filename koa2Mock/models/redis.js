const CONFIG = require('../config/config');
const redis = require('redis')


const auth = CONFIG.redisPassword ? { password: CONFIG.redisPassword } : {}
const client = redis.createClient(Object.assign({}, auth, {
    host: CONFIG.redisHost,
    port: CONFIG.redisPort
}))
client.on('error', function(err) {
    // console.log('Redis Error ' + err);
})

client.on('connect', function() {
    console.log('Redis is ready');
})

module.exports = client