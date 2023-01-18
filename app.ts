import express from 'express';
import { connectionConfig } from './config/serverConfig';
import router from './routes/userRoutes'
const app = express()
const {port} = connectionConfig

app.use('/', router)
app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`)
})