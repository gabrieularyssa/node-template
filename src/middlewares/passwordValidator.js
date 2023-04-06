const { body } = require('express-validator')


const userValidator = (req, res, next) => {

    body('password').trim().isAlphanumeric().isLength({ min: 8 })
    next()

}

module.exports = userValidator