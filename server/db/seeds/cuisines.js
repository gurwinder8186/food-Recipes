export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('cuisines').del()

  // Inserts seed entries
  await knex('cuisines').insert([
    {
      name: 'Italian',
      description:
        'Famous for pasta, pizza, and a wide range of rich, flavorful sauces and cheeses.',
    },
    {
      name: 'Chinese',
      description:
        'Known for diverse flavors, such as sweet, sour, and savory, and staples like noodles and dumplings.',
    },
    {
      name: 'Japanese',
      description:
        'Renowned for sushi, sashimi, ramen, and emphasis on fresh, seasonal ingredients.',
    },
    {
      name: 'Mexican',
      description:
        'Popular for tacos, burritos, and bold, spicy flavors with ingredients like beans, corn, and chilies.',
    },
    {
      name: 'Indian',
      description:
        'Characterized by vibrant spices, curries, and a variety of regional dishes from North and South India.',
    },
    {
      name: 'French',
      description:
        'Famous for fine dining, pastries, cheese, and wine, with an emphasis on technique and rich flavors.',
    },
  ])
}
