const express = require('express')

const {CityController}=require('../../controllers')
const router=express.Router()

// api/v1/airplanes  POST
router
    .post('/',
        CityController.createCity)


module.exports= router