import "./utils/env.js";

import express from 'express';
import cors from "cors";
import http from "http";

const app = express();

app.use(cors());

// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }));

app.use(express.json());

const server = http.createServer(app);

app.get("/", (req, res) => {
    res.send("Server running!");
});

async function startServer() {
    server.listen(process.env.PORT, () => {
        console.log("Server listening on port: " + process.env.PORT);
    })
}

startServer();