const userModel = require("../models/user.model")
const authController = require("../controllers/auth.controller")

/**
 * @name registerUserController
 * @description Register a new user, expects username, email and password in the request body
 * @access Public
 */

async function registerUserController(req, res) {
  
  const { userbname, email, password } = req.body
   
  if (!username || !email || !password) {
    return res.status(400).json({
        message: "Please provide username, email and password"
    })
   }
  
  const isUserAlreadyExists = await userModel.findOne({
    $or: [{username}, {email}]
  })

  if (isUserAlreadyExists) {

    /* isUser AlreadyExists.username == username */
    return res.status(400).json ({
        message: "Account already exists  with this email address or username"
    })
  }

  const newUser = new userModel

}

module.exports = {
    registerUserController
}