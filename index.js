var koa = require('koa')
var proxy = require('koa-proxy')
var cors = require('kcors')

koa()
.use(cors())
.use(proxy({ host: 'http://api.giphy.com' }))
.listen(process.env.PORT || 12345)
