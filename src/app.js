import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {dbConnection} from "./db/dbConnection.js"

const app = express();
dotenv.config({
    path: "./config/config.env"
});


app.use(cors({
    origin:[process.env.Frontend_URI],
    methods: ["GET", "POST"],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));


dbConnection();

export default app;