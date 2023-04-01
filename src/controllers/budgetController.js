const budgetService = require('../services/budgetService.js')

exports.getAll = async (req, res) => {

    console.log("Controller: Get All")
    data = budgetService.selectAll()
    
}

exports.getUnique = async (req, res) => {

    const id = req.params.id;
    console.log("Controller: Get unique")
    data = budgetService.selectUnique(id)

}