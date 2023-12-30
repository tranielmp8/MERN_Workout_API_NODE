const express = require('express')

const {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

// GET all workouts
router.get('/', getAllWorkouts)

// GET single workout
router.get('/:id', getWorkout)

// POST a workout (CREATE)
router.post('/', createWorkout)

// DELETE a workout 
router.delete('/:id', deleteWorkout)
// UPDATE a workout (PUT OR PATCH)
router.patch('/:id', updateWorkout)

module.exports = router