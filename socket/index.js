const { Server } = require("socket.io");

const io = new Server({ cors: "http://localhost:5173/" });

let onlineUser = [];

io.on("connection", (socket) => {
  console.log("new connection", socket.id);

  //listen to a connexction
  socket.on("addNewUser", (userId) => {
    !onlineUser.some((user) => user.userId === userId) &&
      onlineUser.push({ userId, socketId: socket.id });

    console.log("onlineUsers", onlineUser);

    io.emit("getOnlineUsers", onlineUser);
  });

  socket.on("disconnect", () => {
    onlineUser = onlineUser.filter((user) => user.socketId !== socket.id);
    io.emit("getOnlineUsers", onlineUser);
  });
});

io.listen(3000);
