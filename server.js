let express = require('express')
let cors = require('cors')
let app = express()

let mongoDB = require('./config/mongodb')

app.use(express.json())

mongoDB()
app.use(cors())



let userRouter = require('./routes/userRoutes')

app.use('/user', userRouter)



app.listen(4000, () => {

    console.log('server connected');

})
