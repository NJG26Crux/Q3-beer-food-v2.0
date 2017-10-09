
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favs', (table) => {
    table.increments();
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('beer_id')
      .notNullable()
      .references('id')
      .inTable('beer_recipe')
      .onDelete('CASCADE')
      .index();
    table.integer('food_id')
      .notNullable()
      .references('id')
      .inTable('food_recipe')
      .onDelete('CASCADE')
      .index();
    table.boolean('public').defaultTo(false);
    table.text('review').notNullable();
    table.string('image_url').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('favs');
};
