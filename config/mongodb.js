let mongoose = require('mongoose')


function connectmongo() {
    mongoose.connect('mongodb://localhost:27017/mocktest').then(() => {
        console.log('mongoDb connected');


    }).catch((err) => {
        console.log(err);

    })
}

module.exports = connectmongo;