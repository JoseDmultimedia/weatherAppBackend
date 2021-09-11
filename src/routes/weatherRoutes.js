
const {Router} = require('express');
const router = Router();
const weatherControl = require("../controllers/weatherController.js");


//Definicion de rutas para los servicios

//Routas con la conexion de la bd
router.post("/create-weather", weatherControl.create); //Check
router.get("/all-weather", weatherControl.all); //Chack
router.delete("/delete-weather/:id", weatherControl.delete); //Check
router.get("/last-weather", weatherControl.last); //Check
router.get("/weather-id/:id", weatherControl.find); //Check

//Validación del key ingresado por el usuario
router.get("/key/:key", (req, res) =>{
    var key = req.params.key;
    if(key === "12345"){
        res.send("Ok");
    }else{
        res.send("Not")
    }
});


module.exports = router;