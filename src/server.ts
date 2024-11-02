// This is your server file :)
import express from "express"
import path from "path"
import pageRouter from "./routes/page.routes"
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.set("view engine", "EJS")
app.set("views", path.join(__dirname, "../src/views"))

app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))

app.use("/", pageRouter)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})