
exports.up = function(knex, Promise) {
  return knex.schema.createTable('food_recipe', (table) => {
    table.increments();
    table.integer('food_id').defaultTo(0).notNullable();
    table.string("food_url").notNullable()
    table.string('food_recipe_url').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('food_recipe');
};
