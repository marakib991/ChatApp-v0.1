const { connect } = require("mongodb");
const ws = require("ws");
const server = new ws.Server({port: '3030'});

server.on("connection", socket => {
  socket.on('message', message =>{
    const decode = Buffer.from(message)
    console.log(decode.toString())
    socket.send(`${decode}`)
  })
})