const express = require("express")
const promptController = require("../controllers/prompt-controller")

const routes = express.Router()

routes.post('/api/prompt', promptController.sendText)
routes.get('/api/objects', promptController.getObjects)

module.exports = routes