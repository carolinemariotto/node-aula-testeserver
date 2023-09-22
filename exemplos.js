  import {createServer} from 'node:http'

  const server = fastify()
  
server.post('/videos', () => {
    return 'hello word'

})

server.get('/videos', () => {
    return 'hello terraqueo'

})

server.get('/videos:id', () => {
    return 'hello ninguem merece'

})

server.get('/videos:id', () => {
    return 'hello ninguem merece'

})

server.listen({
    port: 3333,
    

})