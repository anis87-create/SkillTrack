const { query } = require("../config/db");

module.exports  = {
   async getAll(){
     const GET_ALL_QUERY = 'SELECT * FROM goals ORDER BY id ASC';
     const result = await query(GET_ALL_QUERY);
     return result.rows;  
   },
   async create(name, date, description){
     const INSERT_QUERY = `INSERT INTO goals(name, date, description) VALUES ($1,$2,$3) RETURNING *`;
     const result = await query(INSERT_QUERY, [name, date, description]);
     return result.rows[0];
   },
   async remove(id){
     const DELETE_QUERY = 'DELETE FROM goals WHERE id = $1';
     const result = await query(DELETE_QUERY, [id]);
     return result.rows[0];
   },
   async update(id,name, date, description){
      const UPDATE_QUERY = `UPDATE goals set name=$1, date=$2, description=$3 WHERE id=$4 RETURNING *`;
      const result = await query(UPDATE_QUERY, [name, date, description, id]);
      return result.rows[0]
   },
   async getOneGoal(id){
      const GET_ONE_QUERY = `SELECT  * FROM goals WHERE id = $1`;
      const result = await query(GET_ONE_QUERY, [id]);
      return result.rows[0]; 
   },
    async getGoalByName(name){
      const GET_QUERY_BY_NAME = `SELECT * FROM goals WHERE name = $1`;
      const result = await query(GET_QUERY_BY_NAME, [name]);
      return result;   
  }
   
}


   

