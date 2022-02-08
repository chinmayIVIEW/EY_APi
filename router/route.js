const route = require("express").Router()
const {Logic,token_generation} = require("../controller/logic.controller")
const { checkToken } = require('../auth/auth')



route.get('/eyeson/:user_name',checkToken,Logic)
route.get('/token/:user_name',token_generation)






module.exports = route
