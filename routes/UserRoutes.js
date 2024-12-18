let express = require('express')

let router = express.Router()


let { sign, login } = require('../controller/UserController')

router.post('/sign', sign)
router.post('/login', login)


module.exports = router