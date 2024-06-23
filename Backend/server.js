import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import { databaseconnection } from "./DB/connection.js"
import router from "./Routes/user.route.js"


const app=express()
dotenv.config()


//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

const PORT=process.env.PORT ||8080

databaseconnection()

app.use("/user",router)


app.listen(PORT,()=>{
    console.log(`the app is listning on port ${PORT}`)
})

