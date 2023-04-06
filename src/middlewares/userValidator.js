const { body } = require('express-validator')


exports.userValidator = (req, res, next) => {

    body('name').trim().isLength({ min: 2, max: 150 }).matches(/^[a-zA-ZÀ-ú\s]+$/).withMessage('O nome deve conter apenas letras, acentos e espaços em branco')
    body('email').trim().isEmail().withMessage('E-mail inválido')
    body('phone').trim().isMobilePhone('pt-BR').withMessage('Telefone inválido')
    next()

}