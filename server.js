const express = require('express');
const useSocket = require('socket.io');

const app = express();
const server = require('http').Server(app);
const io = useSocket(server);

app.use(express.json());

const rooms = new Map();

// Web-program
app.get('/rooms', (req, res) =>{
    res.json(rooms);
});

app.post('/rooms', (req, res) => {
    const {roomId, userName} = req.body;
    if(!rooms.has(roomId)) {
        rooms.set(
            roomId,
            new Map([
                ['users', new Map()],
                ['messages', []],
            ]),
        );
    }
    res.json(rooms.values());
})

// Socket
io.on('connection', socket => {
    console.log('user connected', socket);
})

// Server
server.listen(5000, (err) => {
    if(err){
        throw Error(err);
    }
    console.log('Сервер запущен!')
});