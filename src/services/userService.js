userService = {

    selectAll :  async () => {

        console.log("Service: selecionando todos os usuários do Banco de Dados")
        let data;
        const query = 'SELECT * FROM users'
        
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

    selectUnique: async () => {

        console.log("Service: selecionando unidade")
        let data;
        const query = `SELECT * FROM users WHERE id=${id}`

        pool.getConnection((err, connection) => {
            if (err) throw err
            connection.query(query, (err, results) => {
                data = results
                connection.release()
                if (err) throw err;
            })

        })
        
        return data

    }

    /* 
        SELECT users.*, budget.status
        FROM users 
        LEFT JOIN budgets
        ON users.id = budgets.user_id
        WHERE budgets.id = (SELECT id
                            FROM budgets
                            WHERE user_id = users.id
                            ORDER BY created_at DESC
                            LIMIT 1)
    */

}

module.exports = userService