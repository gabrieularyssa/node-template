const pool = require('../database/connection.js')

budgetService = {

    selectAll :  async () => {

        console.log("Service: selecionando todos os usuários do Banco de Dados")
        let data;
        const query = 'SELECT * FROM budgets'
        pool.getConnection((err, connection) => {
            if (err) throw err
            connection.query(query, (err, results) => {
                data = results
                connection.release()
                if (err) throw err;
            })
        })
        
        return data
    
    },

    selectUnique: async (id) => {

        console.log("Service: selecionando unidade")
        let data;
        const query = `SELECT * FROM budgets WHERE id=${id}`

        pool.getConnection((err, connection) => {
            if (err) throw err
            connection.query(query, (err, results) => {
                data = results
                connection.release()
                if (err) throw err;
            })
        })
        
        return data

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