const { User } = require("../models");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const saltRounds = process.env.SALT
const SECRET = String(process.env.TOKEN_SECRET)

const registerUser = async (req, res, _next) => {
  try {
    const { name, email, phone, password, roleId } = req.body;
    const userExist = await User.findOne({ where: { email: email } });
    if (userExist) {
      throw "Este usuario ya existe"
    } else {
      const hashPassowrd = bcrypt.hashSync(password, Number(saltRounds))
      const newUser = new User({
        name,
        email,
        phone,
        password: hashPassowrd,
        roleId: roleId || 2,
      });
      newUser.save();
      res.status(200).json({
        user: newUser
      }).end();
    }
  } catch (error) {
    res.status(400).json({ error: error })
  }
}

const loginUser = async (req, res, _next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } })
    if (user) {
      const isValidUser = bcrypt.compareSync(password, user.password)
      if (isValidUser) {
        const token = jwt.sign({ user }, SECRET, { expiresIn: '2d' })
        res.status(200).json({
          Authorization: token,
          user: user
        }).end();
      } else {
        throw 'La contraseña es incorrecta'
      }
    } else {
      throw 'El email no se encontró'
    }
  } catch (error) {
    res.status(400).json({ error: error })
  }
}

const authenticateUser = async (req, res, _next) => {
  const authorization = req.headers['Authorization'] || req.headers['authorization']
  if (authorization) {
    const token = authorization.split('Bearer ')[1]
    try {
      const user = jwt.verify(token, SECRET)
      res.status(200).json({
        user: user.user || user.newUser,
        Authorization: token
      })
    } catch (error) {
      res.status(400).json({
        error: error,
        message: 'Not valid token'
      })
    }
  } else {
    res.status(400).send('Error: token not found')
  }
}

const getUsers = async (req, res, _next) => {
  try {
    const users = await User.findAll({ where: { roleId: 2 } })
    res.json(users)
  } catch (error) {
    res.status(400).json({ error: error })
  }
}

const getUser = async (req, res, _next) => {
  try {
    const { id } = req.params
    const user = await User.findOne({
      where: {
        id: id
      }
    })
    res.status(200).send(user)
  } catch (error) {
    res.status(404).json('No existe el usuario')
  }
}
module.exports = {
  registerUser,
  loginUser,
  authenticateUser,
  getUsers,
  getUser
};