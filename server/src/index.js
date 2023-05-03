import express from "express";
import cors from 'cors'
import mongoose from 'mongoose'


import {userRouter} from './routes/users.js'
import {recipesRouter} from './routes/recipes.js'
import dotenv from 'dotenv';
dotenv.config();



const app= express()

app.use(express.json()); //whenever you get data from the frontend it will get converted into json
app.use(cors({
    origin: "https://dikshakrecipe.vercel.app"
}));
app.use("/auth", userRouter)
app.use("/recipes", recipesRouter)

mongoose.connect(process.env.MONGO_URI);
    

app.listen(process.env.PORT||3001, () => console.log(`Listening on port ${process.env.PORT||3001}`));