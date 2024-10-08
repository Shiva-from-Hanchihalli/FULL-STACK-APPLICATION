import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./routes/userRoute.js";
import cors from "cors";

const app = express(); 

app.use(bodyParser.json());
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGOURL = process.env.MONGO_URL;

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("DB Connected Successfully");
        app.listen(PORT, () => {
            console.log(`Server is Running on the port: ${PORT}`); 
        });
    })
    .catch((error) => console.log('DB Connection Error:', error));

    app.use("/api", route);



    