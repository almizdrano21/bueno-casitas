import express from 'express';
import { connectionConfig } from './config/serverConfig';
import userRoutes from './routes/userRoutes'
//Create App
const app = express()
const {port} = connectionConfig

// Set up Pug
app.set("view engine", "pug")
app.set("views", "./views")

// Public folder
app.use (express.static("public"))

// Routing
app.use("/auth", userRoutes)


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})