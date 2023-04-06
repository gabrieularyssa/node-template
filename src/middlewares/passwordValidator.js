const { body } = require('express-validator')


exports.passwordValidator = (req, res, next) => {

    body('password').trim().isAlphanumeric().isLength({ min: 8 })
    next()

}