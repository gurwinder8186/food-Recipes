export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('foodList').del()

  // Inserts seed entries
  await knex('foodList').insert([
    // Italian cuisine
    {
      name: 'Pizza',
      description:
        'A baked dough base topped with tomato sauce, cheese, and various toppings.',
      cuisines_id: 1,
    },
    {
      name: 'Pasta',
      description:
        'Italian noodles served with sauces like marinara or alfredo.',
      cuisines_id: 1,
    },
    {
      name: 'Lasagna',
      description: 'Layered pasta dish with meat, cheese, and tomato sauce.',
      cuisines_id: 1,
    },
    {
      name: 'Risotto',
      description: 'Creamy Italian rice dish often made with cheese and broth.',
      cuisines_id: 1,
    },
    {
      name: 'Gelato',
      description: 'Italian ice cream known for its rich and smooth texture.',
      cuisines_id: 1,
    },
    {
      name: 'Tiramisu',
      description:
        'A dessert made with coffee-soaked ladyfingers and mascarpone cheese.',
      cuisines_id: 1,
    },

    // Chinese cuisine
    {
      name: 'Dim Sum',
      description:
        'Small savory dumplings with various fillings, steamed or fried.',
      cuisines_id: 2,
    },
    {
      name: 'Peking Duck',
      description: 'Roasted duck served with thin pancakes and hoisin sauce.',
      cuisines_id: 2,
    },
    {
      name: 'Sweet and Sour Pork',
      description: 'Crispy pork with a sweet and tangy sauce.',
      cuisines_id: 2,
    },
    {
      name: 'Kung Pao Chicken',
      description: 'Spicy stir-fried chicken with peanuts and vegetables.',
      cuisines_id: 2,
    },
    {
      name: 'Fried Rice',
      description: 'Rice stir-fried with eggs, vegetables, and sometimes meat.',
      cuisines_id: 2,
    },
    {
      name: 'Hot Pot',
      description:
        'Soup cooked at the table, with raw ingredients added and cooked by diners.',
      cuisines_id: 2,
    },

    // Japanese cuisine
    {
      name: 'Sushi',
      description:
        'Vinegared rice accompanied by raw fish, vegetables, or other ingredients.',
      cuisines_id: 3,
    },
    {
      name: 'Ramen',
      description: 'Noodle soup with meat, eggs, and vegetables.',
      cuisines_id: 3,
    },
    {
      name: 'Tempura',
      description: 'Battered and fried seafood or vegetables.',
      cuisines_id: 3,
    },
    {
      name: 'Sashimi',
      description: 'Thinly sliced raw fish served with soy sauce and wasabi.',
      cuisines_id: 3,
    },
    {
      name: 'Udon',
      description: 'Thick wheat noodles served in broth with various toppings.',
      cuisines_id: 3,
    },
    {
      name: 'Matcha Tea',
      description:
        'Green tea powder used for making tea or adding flavor to dishes.',
      cuisines_id: 3,
    },

    // Mexican cuisine
    {
      name: 'Tacos',
      description:
        'Corn or wheat tortillas filled with various meats and vegetables.',
      cuisines_id: 4,
    },
    {
      name: 'Guacamole',
      description: 'Avocado-based dip with lime, onions, and tomatoes.',
      cuisines_id: 4,
    },
    {
      name: 'Burritos',
      description:
        'Flour tortilla filled with meat, beans, rice, and other fillings.',
      cuisines_id: 4,
    },
    {
      name: 'Chilaquiles',
      description:
        'Tortilla chips topped with red or green salsa, cheese, and eggs.',
      cuisines_id: 4,
    },
    {
      name: 'Enchiladas',
      description:
        'Corn tortillas rolled around fillings, covered with chili sauce.',
      cuisines_id: 4,
    },
    {
      name: 'Tamales',
      description:
        'Corn dough filled with meat or cheese, steamed in a corn husk.',
      cuisines_id: 4,
    },

    // Indian cuisine
    {
      name: 'Butter Chicken',
      description: 'Chicken cooked in a creamy, tomato-based curry sauce.',
      cuisines_id: 5,
    },
    {
      name: 'Biryani',
      description:
        'Spiced rice dish with meat or vegetables, garnished with fried onions.',
      cuisines_id: 5,
    },
    {
      name: 'Naan',
      description: 'Leavened flatbread served alongside curry.',
      cuisines_id: 5,
    },
    {
      name: 'Samosas',
      description: 'Fried pastries filled with spiced potatoes or meat.',
      cuisines_id: 5,
    },
    {
      name: 'Chole Bhature',
      description: 'Spicy chickpeas served with deep-fried bread.',
      cuisines_id: 5,
    },
    {
      name: 'Masala Dosa',
      description: 'Thin, crispy crepe filled with spiced potatoes.',
      cuisines_id: 5,
    },

    // French cuisine
    {
      name: 'Croissant',
      description: 'Buttery, flaky pastry, often enjoyed for breakfast.',
      cuisines_id: 6,
    },
    {
      name: 'Coq au Vin',
      description: 'Chicken braised in red wine with mushrooms and garlic.',
      cuisines_id: 6,
    },
    {
      name: 'Ratatouille',
      description:
        'Stewed vegetable dish with eggplant, zucchini, peppers, and tomatoes.',
      cuisines_id: 6,
    },
    {
      name: 'Baguette',
      description: 'Long, thin loaf of French bread with a crisp crust.',
      cuisines_id: 6,
    },
    {
      name: 'Quiche Lorraine',
      description: 'Savory tart with eggs, cream, and bacon or ham.',
      cuisines_id: 6,
    },
    {
      name: 'Crème Brûlée',
      description: 'Custard dessert with a caramelized sugar crust.',
      cuisines_id: 6,
    },
  ])
}
