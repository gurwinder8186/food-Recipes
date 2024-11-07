export async function up(knex) {
  return knex.schema.createTable('cuisines', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('cuisines')
}
