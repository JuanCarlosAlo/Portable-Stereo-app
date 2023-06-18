const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
const { Server } = require("socket.io");
const httpServer = require("http").createServer(app);
const io = new Server(httpServer, {
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

// Middlewares
app.use(cors());
app.use(express.json());

// Configuración de conexión a MongoDB
const uri = process.env.MONGODB_URL;
const client = new MongoClient(uri);

// Maneja la conexión de Socket.io
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

// Rutas
app.use("/portable-stereo/users", usersRoutes);
app.use("/portable-stereo/songs", songsRoutes);

// Inicia el servidor
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Conectado a la base de datos");
  } catch (err) {
    console.error("Error de conexión");
  }

  httpServer.listen(process.env.PORT, () => {
    console.log(`Servidor en ejecución en el puerto ${process.env.PORT}`);
  });
};

startServer();
