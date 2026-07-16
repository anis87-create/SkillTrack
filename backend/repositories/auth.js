const { query } = require("../config/db");
const DUMMY_HASH = '$2b$10$CwTycUXWue0Thq9StjUM0uJ8i8Z8XV9nGtzKVwq6PnUcYYCPWNqPa';

module.exports = {
    DUMMY_HASH,
    async getUserByEmail(email){                
        const GET_USER_QUERY = `SELECT id, name, email, password FROM users WHERE email = $1 LIMIT 1`;
        const res = await query(GET_USER_QUERY, [email]);
        return res.rows[0];
    },
    async getUserById(id){
        const GET_USER_QUERY = `SELECT id, name, email, password FROM users WHERE id = $1 LIMIT 1`;
        const res = await query(GET_USER_QUERY, [id]);
        return res.rows[0];
    },
    async register(name, email, password){
       const REGISTER_QUERY = `INSERT INTO users(name, email, password) VALUES ($1, $2, $3) RETURNING *`;
       const res = await query(REGISTER_QUERY, [name, email, password]);
       return res.rows[0];
    }
}
