const fastify = require('fastify')();
const path = require('path');
const serveStatic = require('serve-static');
const Gun = require("gun");



fastify.use('/', serveStatic(path.join(__dirname, '../public/assets')))

fastify.get('/api', async (request, reply) => {
  reply.type('application/json').code(200)
  return { hello: 'world' }
});


fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
});

const gun = new Gun({
    web: fastify.server,
    peers: [],
    verify: {
        check: () => {
            console.log("Peer connected!")
            return true
        }
    }
});