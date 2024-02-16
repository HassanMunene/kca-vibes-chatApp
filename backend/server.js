import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectToMongoDb from './db/connectToMongoDb.js';

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.json('we are listening..')
})
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`)
})
