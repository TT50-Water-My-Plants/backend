exports.up = function(knex) {
  return knex.schema
  .createTable("users", tbl => {
  tbl.increments();
  tbl.string("username", 128).unique().notNullable();
  tbl.string("phone_number").unique().notNullable();
  tbl.string("password").notNullable();
})
.createTable("plants", tbl => {
    tbl.increments();
    tbl.string("nickname").unique().notNullable();
    tbl.string("species").notNullable();
    tbl.string("h2o_frequency").notNullable();
})
.createTable("usersPlants", tbl => {
    tbl.increments();
    tbl.integer("plant_id").unsigned().notNullable().references("id").inTable("plants").onUpdate("CASCADE").onDelete("RESTRICT");
    tbl.integer("user_id").unsigned().notNullable().references("id").inTable("users").onUpdate("CASCADE").onDelete("RESTRICT");
})
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("usersPlants")
    .dropTableIfExists("plants")
    .dropTableIfExists("users") 
};
