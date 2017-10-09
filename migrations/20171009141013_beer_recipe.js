
exports.up = function(knex, Promise) {
  return knex.schema.createTable('beer_recipe', (table) => {
    table.increments();
    table.integer('beer_id').defaultTo(0).notNullable();
    table.text('beer_recipe').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('beer_recipe');
};
