const connection = require("../database/connection");
const { v4: uuidv4 } = require('uuid');

module.exports = {
  async create(user) {
    const user_id = uuidv4();
    user.user_id = user_id;

    const result = await connection("user").insert(user);
    return result; 
  },
  
  async getById({user_id}) = {
    const result = await connection("user").where({user}).select("*");
    return result;
  },

  async updateById(user, user_id) {
    const result = await connection("user").where({user_id}).update(user);
    return result;
  },

  async deleteById(user_id) {
    const result = await connection("user").where({user_id}).delete();
    return result;
  },
};