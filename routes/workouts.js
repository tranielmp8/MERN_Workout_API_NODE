const express = require('express')

const {
  createWorkout,
  getAllWorkouts,
  getWorkout  
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getAllWorkouts)

// GET single workout
router.get('/:id', getWorkout)

// POST a workout (CREATE)
router.post('/', createWorkout)

// DELETE a workout 
router.delete('/:id', (req, res) => {
  res.json({mssg: 'DELETE a workout'})
})
// UPDATE a workout (PUT OR PATCH)
router.patch('/:id', (req, res) => {
  res.json({mssg: 'UPDATE a workout'})
})

module.exports = router