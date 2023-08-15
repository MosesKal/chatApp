const { Server } = require("socket.io");

const io = new Server({ cors: "http://localhost:5173/" });

let onlineUser = [];

io.on("connection", (socket) => {
  console.log("new connection", socket.id);

  //listen to a connexction
  socket.on("addNewUser", (userId) => {
    !onlineUser.some((user) => user.userId === userId) &&
      onlineUser.push({ userId, socketId: socket.id });
  });
});

io.listen(3000);
