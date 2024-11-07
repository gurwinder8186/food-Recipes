export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()

  // Inserts seed entries
  await knex('recipes').insert([
    // Italian Cuisine
    {
      foodList_id: 1,
      name: 'Classic Pizza',
      ingredients: 'Dough, tomato sauce, mozzarella cheese, various toppings',
      instructions:
        'Preheat oven to 475°F. Roll dough, add sauce and cheese. Add toppings and bake for 10-12 minutes.',
    },
    {
      foodList_id: 2,
      name: 'Spaghetti Pasta',
      ingredients: 'Pasta, olive oil, garlic, marinara or alfredo sauce',
      instructions:
        'Cook pasta. Heat sauce with olive oil and garlic, mix with pasta, and serve.',
    },
    {
      foodList_id: 3,
      name: 'Traditional Lasagna',
      ingredients: 'Pasta sheets, ground meat, cheese, tomato sauce',
      instructions:
        'Layer pasta sheets, meat, cheese, and sauce. Bake at 375°F for 45 minutes.',
    },
    {
      foodList_id: 4,
      name: 'Creamy Risotto',
      ingredients: 'Arborio rice, broth, Parmesan cheese, butter',
      instructions:
        'Sauté rice, add broth gradually while stirring. Add Parmesan and butter to finish.',
    },
    {
      foodList_id: 5,
      name: 'Italian Gelato',
      ingredients: 'Milk, cream, sugar, flavors like chocolate or fruit',
      instructions:
        'Mix ingredients and churn in ice cream maker until smooth.',
    },
    {
      foodList_id: 6,
      name: 'Tiramisu Dessert',
      ingredients: 'Coffee, ladyfingers, mascarpone cheese, cocoa powder',
      instructions:
        'Layer coffee-soaked ladyfingers with mascarpone mix. Dust with cocoa powder and chill.',
    },

    // Chinese Cuisine
    {
      foodList_id: 7,
      name: 'Dim Sum Dumplings',
      ingredients: 'Flour, water, meat or vegetable fillings',
      instructions: 'Roll dough, fill, and steam or fry dumplings.',
    },
    {
      foodList_id: 8,
      name: 'Peking Duck',
      ingredients: 'Duck, hoisin sauce, pancakes, cucumber',
      instructions: 'Roast duck, slice, serve with pancakes and hoisin sauce.',
    },
    {
      foodList_id: 9,
      name: 'Sweet and Sour Pork',
      ingredients: 'Pork, bell peppers, vinegar, sugar, pineapple',
      instructions:
        'Fry pork, add veggies, vinegar, sugar, and pineapple. Simmer until sauce thickens.',
    },
    {
      foodList_id: 10,
      name: 'Kung Pao Chicken',
      ingredients: 'Chicken, peanuts, bell peppers, soy sauce',
      instructions:
        'Stir-fry chicken and vegetables with sauce. Add peanuts at the end.',
    },
    {
      foodList_id: 11,
      name: 'Classic Fried Rice',
      ingredients: 'Rice, eggs, veggies, soy sauce',
      instructions:
        'Stir-fry rice with eggs, vegetables, and soy sauce until heated through.',
    },
    {
      foodList_id: 12,
      name: 'Traditional Hot Pot',
      ingredients: 'Broth, meat, vegetables, noodles',
      instructions: 'Simmer broth, add raw ingredients, cook at the table.',
    },

    // Japanese Cuisine
    {
      foodList_id: 13,
      name: 'Sushi Rolls',
      ingredients: 'Sushi rice, seaweed, fresh fish, veggies',
      instructions:
        'Prepare rice, layer with fish and vegetables, roll and slice.',
    },
    {
      foodList_id: 14,
      name: 'Classic Ramen',
      ingredients: 'Noodles, broth, meat or vegetables',
      instructions: 'Cook noodles, add to hot broth, garnish as desired.',
    },
    {
      foodList_id: 15,
      name: 'Tempura',
      ingredients: 'Shrimp or vegetables, flour, egg',
      instructions: 'Dip in batter and fry until golden brown.',
    },
    {
      foodList_id: 16,
      name: 'Sashimi',
      ingredients: 'Fresh fish, soy sauce, wasabi',
      instructions:
        'Slice fish thinly, serve with soy sauce and wasabi on the side.',
    },
    {
      foodList_id: 17,
      name: 'Udon Noodles',
      ingredients: 'Udon noodles, broth, toppings like tempura or green onions',
      instructions: 'Cook noodles, add to broth, top as desired.',
    },
    {
      foodList_id: 18,
      name: 'Matcha Tea',
      ingredients: 'Matcha powder, hot water',
      instructions: 'Whisk matcha powder with hot water until frothy.',
    },

    // Mexican Cuisine
    {
      foodList_id: 19,
      name: 'Tacos',
      ingredients: 'Tortillas, meat, veggies, salsa',
      instructions: 'Warm tortillas, add fillings, and fold.',
    },
    {
      foodList_id: 20,
      name: 'Guacamole Dip',
      ingredients: 'Avocado, lime, onions, tomatoes',
      instructions:
        'Mash avocado, mix with lime, onions, tomatoes, and seasonings.',
    },
    {
      foodList_id: 21,
      name: 'Burritos',
      ingredients: 'Tortilla, beans, rice, meat, cheese',
      instructions: 'Fill tortilla with ingredients, roll tightly.',
    },
    {
      foodList_id: 22,
      name: 'Chilaquiles',
      ingredients: 'Tortilla chips, salsa, cheese, eggs',
      instructions:
        'Top chips with salsa, cheese, and eggs. Bake until cheese melts.',
    },
    {
      foodList_id: 23,
      name: 'Enchiladas',
      ingredients: 'Corn tortillas, meat, chili sauce',
      instructions:
        'Fill tortillas, roll, cover with sauce, and bake until warm.',
    },
    {
      foodList_id: 24,
      name: 'Tamales',
      ingredients: 'Corn dough, meat or cheese, corn husks',
      instructions: 'Fill dough, wrap in husks, steam until cooked through.',
    },

    // Indian Cuisine
    {
      foodList_id: 25,
      name: 'Butter Chicken',
      ingredients: 'Chicken, tomatoes, cream, spices',
      instructions: 'Cook chicken with spices, add tomatoes and cream, simmer.',
    },
    {
      foodList_id: 26,
      name: 'Biryani',
      ingredients: 'Rice, meat, spices, fried onions',
      instructions: 'Cook rice with meat and spices, garnish with onions.',
    },
    {
      foodList_id: 27,
      name: 'Naan Bread',
      ingredients: 'Flour, yogurt, butter',
      instructions: 'Knead dough, cook on a skillet until puffy and golden.',
    },
    {
      foodList_id: 28,
      name: 'Samosas',
      ingredients: 'Potatoes, spices, pastry dough',
      instructions: 'Fill dough with potatoes, fold, and fry.',
    },
    {
      foodList_id: 29,
      name: 'Chole Bhature',
      ingredients: 'Chickpeas, spices, flour',
      instructions: 'Cook chickpeas with spices, serve with fried bread.',
    },
    {
      foodList_id: 30,
      name: 'Masala Dosa',
      ingredients: 'Rice batter, spiced potatoes',
      instructions: 'Spread batter, fill with potatoes, fold and cook.',
    },

    // French Cuisine
    {
      foodList_id: 31,
      name: 'Croissant',
      ingredients: 'Butter, flour, yeast, milk',
      instructions:
        'Roll dough with butter, fold multiple times, bake until golden.',
    },
    {
      foodList_id: 32,
      name: 'Coq au Vin',
      ingredients: 'Chicken, red wine, mushrooms, garlic',
      instructions: 'Brown chicken, add wine and veggies, simmer until tender.',
    },
    {
      foodList_id: 33,
      name: 'Ratatouille',
      ingredients: 'Eggplant, zucchini, tomatoes, peppers, onions',
      instructions: 'Sauté vegetables, layer in a pan, bake at 350°F.',
    },
    {
      foodList_id: 34,
      name: 'Baguette',
      ingredients: 'Flour, yeast, water, salt',
      instructions:
        'Knead dough, let rise, bake at high heat for a crispy crust.',
    },
    {
      foodList_id: 35,
      name: 'Quiche Lorraine',
      ingredients: 'Eggs, cream, bacon or ham',
      instructions:
        'Whisk eggs and cream, pour into crust, add toppings, bake.',
    },
    {
      foodList_id: 36,
      name: 'Crème Brûlée',
      ingredients: 'Egg yolks, cream, sugar',
      instructions: 'Bake custard, caramelize sugar on top with a torch.',
    },
  ])
}
