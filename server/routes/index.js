
module.exports = app => {
  app.use('/api/phones', require('./mobile.routes'))
}