import { Server } from "socket.io";

class SocketService {
  private _io: Server;

  constructor() {
    console.log(`Init socket server...`);
    this._io = new Server({
      cors: {
        allowedHeaders: ["*"],
        origin: "*",
      },
    });
  }

  public initListeners() {
    const io = this.io;
    console.log(`Init socket listener.`);
    io.on("connect", (socket) => {
      console.log(`New socket connected: `, socket.id);

      socket.on("emit:message", ({ message }: { message: string }) => {
        console.log(`New Message Rec.`, message);
      });
    });
  }

  get io() {
    return this._io;
  }
}

export default SocketService;
