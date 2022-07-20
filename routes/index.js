const router = require("express").Router()
const htmlroute = require("./htmlroute")
const apiroute = require("./api")

router.use("/api", apiroute)

router.use("/", htmlroute)
module.exports = router