import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import connectToMongoDB from './db/ConnectToMongoDB.js';

const app = express()
const PORT = process.env.PORT || 8000

dotenv.config();

app.use(express.json());

app.use("/api/auth", authRoutes) 
app.use("/api/message", messageRoutes) 

// app.get('/', (req, res) => {
//     // root route http://localhost:5000/
//     res.send('Hello World!')
// });

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`listening on port ${PORT}`)
});
