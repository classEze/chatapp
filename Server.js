const express=require('express');
const http=require('http');
const app=express();
const io=require('socket.io');
app.use(express.static('public'))


const PORT=process.env.port || 2020;

app.get('/',(req,res)=>{
  // res.sendFile(`${__dirname}/index.html`)
  res.send('Wetin naa')
})

//Create the socket Server
const server=http.createServer(app)
const socketServer=io(server);

  socketServer.on('connection',(thisSocket)=>{
    console.log(`New User Connected With id: ${thisSocket.id}`);

  thisSocket.on('admin_message',data=>{
    thisSocket.broadcast.emit('admin_message', `${data.moniker} has joined the chatRoom ${data.room}`);
  })

  thisSocket.on('chat_message',data=>{
    socketServer.sockets.emit('chat_message', data);
  })


  thisSocket.on('is_typing',data=>{
    thisSocket.broadcast.emit('show_typing_message', data);
  })
})

server.listen( PORT, ()=>console.log(` Server listening to requests on port ${PORT}`));