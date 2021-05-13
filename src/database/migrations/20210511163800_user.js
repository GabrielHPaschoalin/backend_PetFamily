exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.string("user_id").primary().notNullable();
    table.string("username").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("number").notNullable();
    table.string("cpf").notNullable();
    table.string("cep").notNullable();
    table.string("complement").notNullable();
    table.date("birthDate").notNullable();
    table.string("firebase_id").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
