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

exports.postBudget = async (req, res) => {

    console.log("Controller: Post budget")
    
    const budget = {
        size: req.body.size,
        description: req.body.description,
        style: req.body.style,
        color: req.body.color
    }

    try{

        data = budgetService.insertBudget(budget)
        res.status(201).json(data)

    } catch(err) {

        return res.status(400).json({message: "Controller Error: bad request", err: err})

    }

}