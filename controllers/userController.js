// users
const users = require('../data/users')

// All Users
const allUsers = (req, res) => {
  res.json({ isSuccess: true, data: users })
}

// userDetails userByid
const userById = (req, res) => {
  const id = Number(req.params.id)

  const user = users.find((item) => item.id === id)

  if (!user) {
    return res.status(404).send({ isSuccess: false, message: 'user not Found' })
  }

  res.json({ isSuccess: true, user })
}

// creating Users

const createUser = (req, res) => {
  const { name, brand } = req.body

  // checking users name and brand

  if (!name || !brand) {
    return res.status(404).json({
      isSuccess: false,
      message: 'username and Email is Required ',
    })
  }

  // now creating new users
  const newUser = {
    id: users.length + 1,
    name,
    brand,
  }

  // adding user to the users arrays
  users.push(newUser)

  // message after adding the usersto the data

  res.status(200).json({
    isSuccess: true,
    message: 'user Successfully Created',
    data: newUser,
  })
}

// Exporting
module.exports = {
  allUsers,
  userById,
  createUser,
}
