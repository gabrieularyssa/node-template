const { body } = require('express-validator')


exports.emailValidator = (req, res, next) => {

    body('email').trim().isEmail().withMessage('E-mail inválido')
    next()

}