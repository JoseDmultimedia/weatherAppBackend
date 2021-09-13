const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let weatherSchema = new Schema({
    // weather: [{
    //     id: Number,
    //     main: String
    // }],
    // base: String,
    // general:{
    //     temp: Number,
    //     temp_min: Number,
    //     temp_max: Number,
    //     humidity: Number
    // },
    // wind: {
    //    speed: Number
    // },
    // sys:{
    //     tipo: Number,
    //     id: Number,
    //     country: String
    // },
    // name: String

    temp: Number,
    velocidad: Number,
    humedad: Number,
    ciudad: String
})

module.exports = mongoose.model("weather", weatherSchema);