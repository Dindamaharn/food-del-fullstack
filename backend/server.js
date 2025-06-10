/* This JavaScript code is setting up a basic server using Express.js framework. Here's a breakdown of
what each part does: */
import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import foodRouter from "./routes/foodRoute.js"

// app config
const app = express()
const port = 4000

// middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

//api end points
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req, res)=>{
    res.send("API working")
})

app.listen(port,()=>{
    console.log(`Server Started on http://localhost:${port}`)
})

