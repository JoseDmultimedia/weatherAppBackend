
let weatherModel = require("../models/weatherModel.js");

let weatherController ={
    create: async(req, res) =>{
        let newWeather = new weatherModel(req.body);
        let saveWeather = await newWeather.save();
        res.json(saveWeather);
    },
    find: async(req,res) =>{
        let found = await weatherModel.find({
            _id: req.params.id
        });
        res.json(found);
    },
    all: async(req, res) =>{
        let allWeather = await weatherModel.find({});
        res.json(allWeather);
    },
    delete: async(req, res) =>{
        let {id} = req.params;
        await weatherModel.remove({_id:id});
        res.json("Ok");
    },
    last: async(req, res) =>{
        let lastWeather = await weatherModel.find().sort({_id:-1}).limit(1);
        res.json(lastWeather);
    }
}

module.exports = weatherController;