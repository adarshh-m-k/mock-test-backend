let jwt = require('jsonwebtokens')

function tokenValidate(req, res, next) {

    if (!req.headers.authorization) {
        res.status(401).json({ message: "no token" })
        return
    }

    let token = req.headers.authorization.split(' ')[1]

    console.log(token);

    jwt.verify(token, "JWT_SECRET", async (err, decode) => {
        if (!decode) {
            res.status(401).json({ message: "invalid token" })

        } else {
            next()
        }
    })


}

module.exports = tokenValidate