const express = require('express')

const Plants = require('./plants-model')

const router = express.Router()

const restricted = require('../auth/auth-middleware')

// [POST] new plant
router.post('/', restricted, (req, res) => {

   Plants.addPlants(req.body)
      .then(plant => {
         res.status(201).json(plant)
      })
      .catch(error => {
         res.status(500).json({
            error: 'System Error!'
         })
      })
})

// [POST] plant to user
router.post('/:id/users', restricted, (req, res) => {

   Plants.addPlantsIdUserId({
      plant_id: req.params.id,
      user_id: req.body.user_id
   })
      .then(plants => {
         res.status(201).json(plants)
         // Plants.findPlantsByUserId(req.body.user_id)
         //    .then(plants => {
         //       res.status(201).json(plants)
         //    })
         //    .catch(error => {
         //       res.status(500).json({
         //          error: 'Please provide correct user id'
         //       })
         //    })
      })
      .catch(error => {
         res.status(500).json({
            error: 'Something went wrong'
         })
      })
})

// [GET] all plants
router.get('/', restricted, (req, res) => {
   Plants.findAllPlants()
      .then(plants => {
         res.status(201).json(plants)
      })
      .catch(error => {
         res.status(500).json({
            error: 'please provide correct username and password'
         })
      })
})

// [GET] specific plants
router.get('/:id', restricted, (req, res) => {
   Plants.findPlantsById(req.params.id)
      .then(plant => {
         res.status(201).json(plant)
      })
      .catch(error => {
         res.status(500).json({
            error: 'Please provide correct id'
         })
      })
})

// [GET] all plants from specific user
router.get('/users/:id', restricted, (req, res) => {
   Plants.findPlantsByUserId(req.params.id)
      .then(plants => {
         res.status(201).json(plants)
      })
      .catch(error => {
         res.status(500).json({
            error: 'Please provide correct user id'
         })
      })
})

// [PUT] update specific plant info
router.put('/:id', restricted, (req, res) => {
   Plants.updatePlants(req.params.id, req.body)
      .then(plant => {
         res.status(201).json(plant)
      })
      .catch(error => {
         res.status(500).json({
            error: 'Please provide correct format'
         })
      })
})

// [DELETE] plant
router.delete('/:id', restricted, (req, res) => {
   Plants.removePlants(req.params.id)
      .then(plant => {
         Plants.removePlantsIdUserId(req.params.id)
            .then(plant => {
               res.status(201).json({
                  message: 'Successfully deleted'
               })
            })
            .catch(error => {
               res.status(500).json({
                  message: 'Something went wrong!'
               })
            })
         
      })
      .catch(error => {
         res.status(500).json({
            error: 'Please provide correct id'
         })
      })
})


module.exports = router