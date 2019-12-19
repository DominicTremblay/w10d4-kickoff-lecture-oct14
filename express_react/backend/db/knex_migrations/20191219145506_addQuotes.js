exports.up = function(knex) {
  return knex.schema.createTable('quotes', table => {
    table
      .increments('id')
      .primary()
      .unsigned();
    table.string('content');
    table
      .integer('user_id')
      .references('id')
      .inTable('users')
      .notNull()
      .onDelete('cascade');
  });
};

exports.down = function(knex) {};
