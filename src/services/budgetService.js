const pool = require('../database/connection.js')

budgetService = {

    selectAll :  async () => {

        console.log("Service: selecionando todos os usuários do Banco de Dados")
        const query = 'SELECT * FROM budgets'

        const data = await pool.query(query)        
        return data.rows
        
    },

    selectUnique: async (id) => {

        console.log("Service: selecionando unidade")
        const query = 'SELECT * FROM budgets WHERE id=$1'
        const values = [id]

        const data = await pool.query(query, values)        
        return data.rows

    },

    insertBudget: async () => {

        console.log("Service: inserindo o orçamento no banco de dados")
        const size = req.body.size
        const description = req.body.description
        const style = req.body.style
        const color = req.body.color
        const query = `INSERT INTO budgets (size, description, style, color) VALUES ('${size}','${description}', '${style}', '${color}')`

    }

}

module.exports = budgetService