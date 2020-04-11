import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/safespace";
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
