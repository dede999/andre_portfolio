const express = require('express')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const bodyParser = require('body-parser')
const app = express()
const rotas = require('./routes')
process.env.DEBUG = 'nuxt:*'

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production'

async function start () {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: false }))

  // app.use
  app.use('/api', rotas)
  // Give nuxt middleware to express
  app.use(nuxt.render)

  const port = process.env.PORT || 3000;
  // Listen the server
  app.listen(port)
  consola.ready({
    message: `💁 Server listening on port ${port}`,
    badge: true,
  })
}
start();

