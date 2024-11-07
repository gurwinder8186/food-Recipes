export async function up(knex) {
  return knex.schema.createTable('foodList', (table) => {
    table.increments('id').primary()
    table.integer('cuisines_id').references('cuisines.id')
    table.string('name')
    table.string('description')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('foodList')
}
