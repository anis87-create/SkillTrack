const { query } = require("../config/db");

module.exports = {
    async getUserByEmail(email){                
        const GET_USER_QUERY = `SELECT name, email, password FROM users WHERE email = $1 LIMIT 1`;
        const res = await query(GET_USER_QUERY, [email]);
        return res.rows[0];
    },
    async register(name, email, password){
       const REGISTER_QUERY = `INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *`;
       const res = await query(REGISTER_QUERY, [name, email, password]);
       return res.rows[0];
    }
}
