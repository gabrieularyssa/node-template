const budgetService = require('../services/budgetService.js')

exports.getAllBudgets = async (req, res) => {

    console.log("Controller: Get All")
    try {

        data = budgetService.selectAll()
        return res.status(200).json(data)

    } catch(err) {

        return res.status(500).json({message: "Controller Error: failed access to database", err: err})

    }
    
    
}

exports.getUniqueBudget = async (req, res) => {


    console.log("Controller: Get unique")
    const id = req.params.id;
    try {

        data = budgetService.selectUnique(id)
        return res.status(200).json(data)

    } catch(err) {

        return res.status(500).json({message: "Controller Error: failed access to database", err: err})

    }

}