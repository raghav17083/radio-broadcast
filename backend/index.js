const express = require("express");
// import cors from "cors";
const cors = require("cors");
// import http from "http";
const { Server: IOServer } = require("socket.io");

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

const server = http.createServer(app);
const io = new IOServer(server);

const asyncFunct = async () => {};

// asyncFunct();
