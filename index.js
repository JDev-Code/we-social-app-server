import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import logInProcess from './src/process/logInProcess.js'
import signUpProcess from './src/process/signUpProcess.js'
import newProjectProcess from './src/process/newProjectProcess.js'
import getMessagesProcess from './src/process/getMessagesProcess.js'
import getProjectsProcess from './src/process/getProjectsProcess.js'
import getUserInfoProcess from './src/process/getUserInfoProcess.js'
import createNewMessage from './src/mysql/createNewMessage.js'

const app = express()
const PORT = process.env.PORT || 3000
const server = http.createServer(app)
const io = new Server(server)

app.use(express.json())
let connections = []

// Run when client connects
io.on('connection', (socket) => {
  console.log('just connected:', socket)
  console.log(connections);
  socket.emit('welcome', 'WELCOME: ' + socket.id)

  socket.on('createRoom', async myRoom => {
    console.log('creating room');
    let newConnections = []
    connections.forEach(c => {
      if (c.myRoom !== myRoom) {
        console.log('not me, saving...');
        newConnections.push(c)
      } else {
        console.log('disconnecting user repeated')
        c.socket.leave(socket.id)
        c.socket.disconnect()
      }
    })
    connections = newConnections
    connections.push({ myRoom: myRoom, socket: socket })
    connections.forEach(c => {
      console.log(c.myRoom, c.socket.id)
    });
    console.log('TOTAL CONNECTIONS: ', connections.length)
    console.log('MY ROOMS: ',socket.rooms.size);
  })

  socket.on('bye', (myRoom) => {
    console.log('BYE', myRoom);
    let newConnections = []
    connections.forEach(c => {
      if (c.myRoom !== myRoom) {
        console.log('not me, saving...');
        newConnections.push(c)
      }
    })
    connections = newConnections
  })

  socket.on('sendMsg', (roomId, msg) => {
    console.log(roomId,  '  ', msg)
    connections.forEach(async (c) => {
      console.log('hey', roomId, c.myRoom)
      if (c.myRoom === roomId) {
        console.log('sending msg to room ',c.socket.id)
        await socket.join(c.socket.id)
        console.log('MY ROOMS: ',socket.rooms.size);
        socket.to(c.socket.id).emit('msgFromServer', msg)
        await socket.leave(c.socket.id)
        console.log('MY ROOMS: ',socket.rooms.size);
      }
    })
      createNewMessage(msg)
  })


})

app.post('/login', async (req, res) => {
  res.send(await logInProcess(req))
})

app.post('/signup', async (req, res) => {
  res.send(await signUpProcess(req))
})

app.post('/newproject', async (req, res) => {
  res.send(await newProjectProcess(req))
})

app.get('/getprojects', async (req, res) => {
  res.send(await getProjectsProcess())
})

app.get('/getmessages', async (req, res) => {
  res.send(await getMessagesProcess(req))
})

app.get('/getuserinfo', async (req, res) => {
  res.send(await getUserInfoProcess(req))
})

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

