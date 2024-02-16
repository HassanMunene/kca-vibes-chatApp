import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import connectToMongoDb from './db/connectToMongoDb.js';

const app = express();
const PORT = process.env.PORT || 5000

dotenv.config();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.get('/', (req, res) => {
    res.json('we are listening..')
})

app.listen(PORT, () => {
    connectToMongoDb();
    console.log(`Server is running on port ${PORT}`)
})
