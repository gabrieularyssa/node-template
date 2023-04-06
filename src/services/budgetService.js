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

    insertBudget: async (budget) => {

        console.log("Service: inserindo o orçamento no banco de dados")
               
        const query = "INSERT INTO budgets (size, description, style, color) VALUES ($1, $2, $3, $4, (NOW() AT TIME ZONE 'America/Sao_Paulo')) RETURNING *"
        const values = [budget.size, budget.description, budget.style, budget.color]

        const data = await pool.query(query, values)
        return data.rows
    }

}

module.exports = budgetService