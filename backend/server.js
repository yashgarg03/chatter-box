import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongoDB from './db/ConnectToMongoDB.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 8000

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes) 
app.use("/api/message", messageRoutes) 
app.use("/api/users", userRoutes) 

// app.get('/', (req, res) => {
//     // root route http://localhost:5000/
//     res.send('Hello World!')
// });

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`listening on port ${PORT}`)
});
