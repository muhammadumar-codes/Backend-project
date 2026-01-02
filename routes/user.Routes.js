const express = require('express')
const router = express.Router()

// imported all exported code from the usercontrollers

const {
  allUsers,
  userById,
  createUser,
} = require('../controllers/userController')

// users Router

router.get('/', allUsers)
router.get('/:id', userById)
router.post('/', createUser)

module.exports = router
