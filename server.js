
const app = require("./src/app")

const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', socket => {
    socket.on("message",function(data){
        console.log(data);
        io.emit("chat-message", data)
    })
    console.log("user connected");
});

server.listen(3000,function(){
    console.log("server is running 3000");
});
