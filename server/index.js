import express from "express";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import dotenv from "dotenv"

dotenv.config()

const app = express();

const server = createServer(app);
const url = process.env.FRONTEND_URL;

const io = new Server(server, {
  cors: {
    origin: `${url}`,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: `${url}`,
    methods: ["GET", "POST"],
    credentials: true,
  })
  );
  
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
  
  io.on("connection", (socket) => {
    // console.log("User Connected", socket.id);
    
    socket.on("message", ({ message }) => {
      // console.log({ message });
      io.emit("receive-message", message);
    });
    
    socket.on("disconnect", () => {
      // console.log("User Disconnected", socket.id);
    });
  });
  
  const port = process.env.PORT || 3000;

  server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});