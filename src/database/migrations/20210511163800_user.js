exports.up = function (knex) {
  return knex.schema.createTable("user", function (table) {
    table.string("user_id").primary().notNullable();
    table.string("username").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("number").notNullable();
    table.int("cpf").notNullable();
    table.int("cep").notNullable();
    table.string("complement").notNullable();
    table.int("birthDate").notNullable();
  });
};

exports.down = function (knex) {
  return knex.cheman.dropTable("user");
};
