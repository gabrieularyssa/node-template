const userService = require('../services/userService.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
        return res.status(200).json(data)

    } catch(err) {

        return res.status(500).json({message: "Controller Error: failed access to database", err: err});

    }

}

exports.postLogin = (req, res) => {

    console.log("User Controller: Login attempt")
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { email, password } = req.body;

    try {
        
        const user = userService.getUserByEmail(email);
        const verify = bcrypt.compare(password, user.password);

        if (!verify) return res.status(400).json({message: "Controller Error: wrong password", err: err});

        delete user.password;
        delete user.is_admin;

        const jwt = jwtLib.sign({ user: user }, process.env.JWT_THE_SECRET);
        res.cookie("session", jwt);
        return res.status(200).json(user);

    } catch(err) {

        return res.status(400).json({message: "Controller Error: wrong e-mail", err: err});

    }


}