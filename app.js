const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/MediaBackend')
    .then(() => {
        console.log("DB CONNECTED");
    })
    .catch(e => {
        console.log("DB CONNECTION ERROR");
        console.log(e);
    })

app.listen(3000, () => {
    console.log("SERVER IS LIVE");
})