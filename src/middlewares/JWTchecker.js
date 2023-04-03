const jwt = require('jsonwebtoken')
require('dotenv').config(__dirname+'../../')


exports.JWTChecker = {
    user : (req, res, next) => {
        console.log("Middleware: Checando token de usuário")

        try {
            
            const jwtdata = jwt.verify(req.cookies.session, process.env.JWT_THE_SECRET)
            req.body.jwtdata = jwtdata
            next()

        } catch(err) {

            res.status(401).json({message: "Acesso não autorizado."})

        }
        
    },
    admin : (req, res, next) => {
        console.log("Middleware: Checando token de usuário")

        try {
            
            const jwtdata = jwt.verify(req.cookies.session, process.env.JWT_THE_SECRET)
            if (jwtdata.is_admin) {

                req.body.jwtdata = jwtdata
                next()
                
            } else {

                res.status(401).json({message: "Apenas administradores"})

            }

        } catch(err) {

            res.status(401).json({message: "Acesso não autorizado."})

        }
    }
}