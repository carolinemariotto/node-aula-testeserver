import fastify from 'fastify';
import { DatabaseMemory } from './database';

const server = fastify();
const database = new DatabaseMemory();

server.post('/videos', (request, reply) => {
    const videoData = {
        title: 'Video 01',
        description: 'Esse é o vídeo 1',
        duration: 180,
    };

    database.create(videoData);
    console.log(database.list());
    reply.status(201).send();
});

server.get('/videos', (request, reply) => {
    return 'hello terraqueo';
});

server.get('/videos/:id', (request, reply) => {
    return 'hello ninguém merece';
});

server.put('/videos/:id ',()  => {

})

server.listen(3333, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});
