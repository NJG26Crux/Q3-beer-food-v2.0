
exports.up = function(knex, Promise) {
  return knex.schema.createTable('ratings', (table) => {
    table.increments();
    table.integer('rating').defaultTo(0).notNullable();
    table.text('comments').notNullable();
    table.integer('artist_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .index();
    table.integer('fav_id')
      .notNullable()
      .references('id')
      .inTable('favs')
      .onDelete('CASCADE')
      .index();  
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('ratings');
};
