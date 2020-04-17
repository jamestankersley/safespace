const config = {
  env: process.env.NODE_ENV || 'production',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/safespace'
}
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/Headlines";
mongoose.connect(MONGODB_URI);

export default config
// standup????