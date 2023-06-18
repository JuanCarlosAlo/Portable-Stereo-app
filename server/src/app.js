const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const { Server } = require("socket.io");
const server = require("http").Server(app);
const io = new Server(server, {
  cors: {
    origin: "https://portable-stereo-app.onrender.com",
    methods: ["GET,POST"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
  },
});

// Rutas
const usersRoutes = require("./routes/users.routes");
const songsRoutes = require("./routes/songs.routes");
// Middlewares para cliente
app.use(cors());
app.use(express.json());

// Configura la conexión a MongoDB
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri);

io.on("connection", (socket) => {
  console.log("Cliente conectado");

  // Maneja la solicitud de cambio de colección
  socket.on("startCollectionListener", () => {
    // Establece el cambio de flujo (change stream) en la colección
    const collectionUsers = client.db("PortableStereo").collection("users");
    const changeStreamUsers = collectionUsers.watch();

    // Escucha los eventos de cambio en el flujo y los emite a través del socket
    changeStreamUsers.on("change", (change) => {
      socket.emit("collectionUsersChange", change);
    });

    const collectionBooks = client.db("PortableStereo").collection("songs");
    const changeStreamBooks = collectionBooks.watch();

    // Escucha los eventos de cambio en el flujo y los emite a través del socket
    changeStreamBooks.on("change", (change) => {
      socket.emit("collectionChange", change);
    });
  });

  // Maneja la desconexión del cliente
  socket.on("disconnect", () => {
    console.log("Cliente desconectado");
  });
});

// Uso de rutas
app.use("/portable-stereo/users", usersRoutes);
app.use("/portable-stereo/songs", songsRoutes);
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Conected to Database");
  } catch (err) {
    console.error("Conection error");
  }
  app.listen(process.env.PORT, () =>
    console.log("Servidor en ejecución en el puerto 3000")
  );
  server.listen(process.env.SOCKET_IO_PORT, () => {
    console.log(
      `Servidor Socket.io escuchando en el puerto ${process.env.SOCKET_IO_PORT}`
    );
  });
};

startServer();
