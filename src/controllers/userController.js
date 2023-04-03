const userService = require('../services/userService.js')

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