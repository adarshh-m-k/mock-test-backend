let userModel = require('../models/UserModel')

let bcrypt = require('bcrypt')

let jwt = require('jsonwebtoken')

module.exports = {

    sign: async (req, res, next) => {

        let { username, mobile, email, password } = req.body

        try {

            let user = await userModel.findOne({ email })

            bcrypt.hash(password, 10, async (err, hashedpassword) => {
                if (!user) {
                    let result = await userModel.create({
                        username: username,
                        mobile: mobile,
                        email: email,
                        password: hashedpassword
                    })

                    res.status(200).json({ message: 'User Created Successfully' })


                } else {
                    res.status(401).json({ message: "User Already exist" })
                }

            })





        } catch (error) {
            console.log(error);


        }



    },
    login: async (req, res, next) => {


        let { email, password } = req.body

        try {

            let response = await userModel.findOne({ email })

            if (!response) {
                res.status(401).json({ message: "email not existing" })
                return
            }

            bcrypt.compare(password, response.password, (err, result) => {
                if (!result) {

                    let { email } = response
                    let token = jwt.sign({ email }, "JWT_SECRET")
                    res.status(401).json({ message: "incorrect password", token })

                } else {
                    res.status(200).json({ message: "Login successfull" })
                }
            })
        } catch (error) {
            console.log(error);


        }
    }

}