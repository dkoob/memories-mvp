import "./utils/env.js";

import express from 'express';
import cors from "cors";
import http from "http";

import experiencesRoutes from "./routes/experiences.js";

const app = express();

app.use(cors());

// app.use(cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true
// }));

const server = http.createServer(app);

app.use(express.json());

app.use("/api/experiences", experiencesRoutes)

app.get("/", (req, res) => {
    res.send("Server running!");
});

async function startServer() {
    server.listen(process.env.PORT, () => {
        console.log("Server listening on port: " + process.env.PORT);
    })
}

startServer();