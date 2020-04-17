import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL

mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri)
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`)
})
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Headlines";
mongoose.connect(MONGODB_URI);
app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})
