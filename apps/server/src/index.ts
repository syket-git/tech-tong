require("dotenv").config();

import http from "http";
import SocketService from "./services/socket";

async function init() {
  const httpServer = http.createServer();
  // initialized the socket service;
  const socketService = new SocketService();

  const PORT = process.env.PORT ? process.env.PORT : 8000;

  //attaching our http server to the socket server
  socketService.io.attach(httpServer);

  httpServer.listen(PORT, () =>
    console.log(`HTTP server started at port ${PORT}`)
  );

  // Initializing the socket listener
  socketService.initListeners();
}

init();
