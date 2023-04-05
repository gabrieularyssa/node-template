const pool = require('../database/connection.js')

userService = {

    selectAll :  async () => {

        console.log("Service: selecionando todos os usuários do Banco de Dados")        
        const query = 'SELECT * FROM users'

        try {
                      
            const data = await pool.query(query) 
            return data.rows    

        } catch(err) {

            throw err

        }
    },

    selectUnique: async (id) => {

        console.log("Service: selecionando unidade")

        const query = 'SELECT * FROM users WHERE id=$1'
        const values = [id]

        try {

            const data = await pool.query(query, values)        
            return data.rows

        } catch(err) {

            throw err

        }
        
    },

    postNew: async (user) => {

        console.log("Service: criando cliente")

        const query = "INSERT INTO users (name, email, password, phone, is_admin, created_at) VALUES ($1, $2, $3, $4, $5, (NOW() AT TIME ZONE 'America/Sao_Paulo')) RETURNING *"
        const values = [user.name, user.email, user.password, user.phone, user.is_admin]

        const data = await pool.query(query, values)
        return data.rows        

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