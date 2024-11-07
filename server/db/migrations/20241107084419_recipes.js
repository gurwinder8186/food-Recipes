export async function up(knex) {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id').primary()
    table.integer('foodList_id').references('foodList.id')
    table.string('name')
    table.string('ingredients')
    table.string('instructions')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('recipes')
}
