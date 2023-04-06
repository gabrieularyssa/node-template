const userService = require('../services/userService.js')
const bcrypt = require('bcrypt')
import { validationResult } from 'express-validator'

exports.getAllUsers = async (req, res) => {

    console.log("Controller User: Get All")
    try {

        data = userService.selectAll()
        return res.status(200).json(data)

    } catch(err) {

        return res.status(500).json({message: "Controller Error: failed access to database", err: err})

    }
    
}

exports.getUniqueUser = async (req, res) => {

    
    console.log("Controller User: Get unique")
    const id = req.params.id;
    try {

        data = userService.selectUnique(id)
        return res.status(200).json(data)

    } catch(err) {

        return res.status(500).json({message: "Controller Error: failed access to database", err: err})

    }

}

exports.postNewUser = async (req, res) => {

    console.log("Controller User: Criando novo usuário")
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    

    const user = {
        name: req.body.name,
        email: req.body.email,        
        phone: req.body.phone,
        is_admin: false,
    };

    try {

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        user.password = hashedPassword;
        
    } catch (err) {

        return res.status(500).json({message: "Controller Error: failed to process password, try again", err: err});

    }

    try {

        data = userService.postNew(user)
        res.status(200).json(data)

    } catch(err) {

        return res.status(500).json({message: "Controller Error: failed access to database", err: err})

    }

}