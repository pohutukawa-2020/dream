const seedRecipes = [
  {
    name: 'Roasted Black Bean Burgers',
    serves: 4,
    prepTime: 40,
    ingredients: [
      {quantity: 1.5, quantityType: '', name: 'red onions'},
      {quantity: 100, quantityType: 'g', name: 'rye bread'},
      {quantity: 1, quantityType: 'can', name: 'black beans'},
      {quantity: 40, quantityType: 'g', name: 'cheddar cheese'},
      {quantity: 4, quantityType: '', name: 'soft rolls'},
      {quantity: 100, quantityType: 'g', name: 'cherry tomatoes'},
      {quantity: 1, quantityType: '', name: 'mango'},
      {quantity: 1, quantityType: '', name: 'avocado'},
    ],
    method: [
      'Preheat the oven to 200ºC/400ºF/gas 6. Peel 1 onion, place in a food processor with the mushrooms, rye bread and 1 teaspoon of ground coriander, and whiz until fine. Drain and pulse in the black beans, season lightly with sea salt and black pepper, then divide into 4 and shape into patties, roughly 2.5cm thick. Rub all over with oil and dust with ground coriander, then place on an oiled baking tray and roast for 25 minutes, or until dark and crispy, topping with the Cheddar and warming the rolls for the last few minutes.',
      'Meanwhile, peel and very finely chop the remaining onion with the tomatoes and place in a bowl. Squeeze over the lime juice, add a few shakes of Tabasco and season to taste. Destone, peel and finely slice the mango and avocado.',
      'Halve the warm rolls and divide the yoghurt between the bases, followed by half the salsa, the mango, avocado and coriander leaves. Top with the burgers, remaining salsa and extra Tabasco, pop the lids on and press down lightly.',
      'Always nice with oven-roasted, skin-on chips.'
    ],
    imagePath: 'https://static01.nyt.com/images/2020/01/22/dining/jo-black-bean-burgers/merlin_167531589_227b9414-ffad-4b44-ae53-67483bd2bae5-articleLarge.jpg'
  },
  {
    name: 'Spinach Lasagne',
    serves: 6,
    prepTime: 50,
    ingredients: [
      {quantity: 70, quantityType: 'g', name: 'butter'},
      {quantity: 50, quantityType: 'g', name: 'plain flour'},
      {quantity: 800, quantityType: 'mL', name: 'milk'},
      {quantity: 800, quantityType: 'g', name: 'spinach'},
      {quantity: 200, quantityType: 'g', name: 'ricotta cheese'},
      {quantity: 300, quantityType: 'g', name: 'lasagne sheets'},
      {quantity: 100, quantityType: 'g', name: 'parmesan cheese'}
    ],
    method: [
      'Preheat the oven to 190°C/375°F/gas 5.',
      'Melt 50g of the butter in a pan and whisk in the flour. Cook for 1 to 2 minutes, then whisk in the milk till smooth. Season with sea salt and freshly ground black pepper, add the bay leaf and simmer for 5 minutes. Turn off the heat.',
      'Remove the stalks from the spinach, then wilt with the remaining 20g butter in a covered pan. When wilted, drain, then, when cool enough to handle, squeeze out the liquid.',
      'Chop the spinach and mix with the ricotta, a ladleful of the white sauce and a good grating of nutmeg. Season.',
      'In a baking dish, layer the lasagne sheets, white sauce, spinach mixture and a grating of Parmesan. Finish with a layer of pasta topped with sauce and more Parmesan.',
      'Bake for 30 minutes, or till golden.'
    ],
    imagePath: 'https://img.jamieoliver.com/jamieoliver/recipe-database/2ipm2HQHql2Azq2dLfiA4k.jpg?tr=w-800,h-1066'
  },
  {
    name: 'Falafel with Quinoa Salad',
    serves: 3,
    prepTime: 40,
    ingredients: [
      {quantity: 400, quantityType: 'g', name: 'canned chickpeas'},
      {quantity: 1/4, quantityType: '', name: 'red onion'},
      {quantity: 1, quantityType: '', name: 'carrot'},
      {quantity: 1, quantityType: '', name: 'clove garlic'},
      {quantity: 1, quantityType: '', name: 'egg'},
      {quantity: 1, quantityType: '', name: 'lemon'},
      {quantity: 2, quantityType: 't', quantityType: '', name: 'ground cumin'},
      {quantity: 1, quantityType: 't', name: 'ground corriander'},
      {quantity: 1, quantityType: 'pinch', name: 'ground cayenne pepper'},
      {quantity: 1, quantityType: 't', name: 'baking powder'},
      {quantity: 1/4, quantityType: 'cup', name: 'wholemeal breadcrumbs'},
      {quantity: 1, quantityType: 'cup', name: 'quinoa'}
    ],
    method: [
      'Put the quinoa on to cook and chop up some of your favourite salad ingredients.',
      'In a large bowl, mash chickpeas with a potato masher until thick and pasty. Add all remaining homemade falafel ingredients and mix well to combine.',
      'Using heaped tablespoons of falafel kofta mix and wet hands, shape mix into patties, about 1cm-thick.',
      'Heat oil in a large, non-stick fry-pan on medium heat. Cook falafel, in batches, for 2–3 minutes each side, until golden brown and cooked through.',
      'Put the cooked quinoa in a serving bowl, add the chopped salad ingredients and your falafel. Top with your favourite dressing and serve warm.'
    ],
    imagePath: 'https://pixel.parall.ax/parallax-agency/image/upload/w_560,h_575,c_fill/expose/cauldron-2018/site-images/20180629164400_BUDDHA%20BOWL.jpg'
  },
  {
    name: 'Roast Chicken With Couscous',
    serves: 3,
    prepTime: 90,
    ingredients: [
      {quantity: 1.6, quantityType: 'kg', name: 'chicken'},
      {quantity: 1, quantityType: '', name: 'lemon'},
      {quantity: 2, quantityType: '', name: 'red onions'},
      {quantity: 2, quantityType: '', name: 'carrots'},
      {quantity: 1, quantityType: 't', name: 'ground cumin'},
      {quantity: 200, quantityType: 'g', name: 'roasted red peppers, drained'},
      {quantity: 250, quantityType: 'g', name: 'couscous'}
    ],
    method: [
      'It\'s best to use a nice free-range or organic chicken for this dish, or the best-quality bird you can afford; and I love the idea of the tasty vegetables in this recipe getting a whole lot of love. If you like, a mint sauce would make a great accompaniment. Pretty delish!', '2. Preheat the oven to 200°C. Place the chicken on a board and make some deep crisscross slashes into the legs – this will help the spices to penetrate the meat, and will also help it to cook more quickly. Halve the lemon and place inside the chicken, then rub the chicken skin all over with olive oil, a little sea salt, pepper and the cumin. Transfer the chicken to a roasting tray and place in the hot oven.',
      'Peel and quarter the onions and carrots. When the chicken\'s been cooking for around 15 minutes, reduce the heat to 180°C and add the onions and carrots to the tray. Roast for a further hour, or until golden and cooked through – the chicken is cooked when the thigh meat pulls easily away from the bone and the juices run clear.',
      'Once perfectly cooked, carefully lift the chicken onto a plate or board and cover with tin foil and a couple of tea towels to keep warm. Spoon the vegetables onto a board and roughly chop them, then tip back into the tray and place on a medium heat. Pour in 500ml boiling water and stir well, making sure you scrape up all the lovely sticky goodness from the bottom of the tray.',
      'Drain and roughly chop the peppers, then add them to the tray with the smoked paprika, ground coriander and the couscous. Pull the lemon halves out of the chicken with a pair of tongs and squeeze the juices into the tray (making sure to catch any pips). Bring to the boil, then turn the heat off and leave to rest for 5 minutes, or until the couscous has absorbed all of the water. Meanwhile, pick and finely chop the mint leaves. When the time\'s up, fluff up the couscous using a fork and stir through the chopped mint. Drizzle with a good lug of extra virgin olive oil and everything together.', '6. Cut the chicken up into joints, removing the skin if you want to keep it healthy, then serve with the tasty roast-vegetable couscous. Enjoy!', '7. Nims Tip: Basting a chicken as it cooks helps to stop it drying out, giving you lovely, juicy meat. Check on the chicken every 20 to 30 minutes, and spoon any juices from the bottom of the tray back over the bird.'
    ],
    imagePath: 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/797_1_1436881994.jpg?tr=w-800,h-1066'
  },
  {
    name: 'Saag Paneer',
    serves: 4,
    prepTime: 60,
    ingredients: [
      {quantity: 2, quantityType: '', name: 'clove garlic'},
      {quantity: 1, quantityType: 't', name: 'ginger'},
      {quantity: 1, quantityType: '', name: 'onion'},
      {quantity: 1, quantityType: '', name: 'ripe tomato'},
      {quantity: 1, quantityType: 't', name: 'cumin seeds'},
      {quantity: 2, quantityType: 't', name: 'garam masala'},
      {quantity: 1, quantityType: 't', name: 'turmeric'},
      {quantity: 600, quantityType: 'g', name: 'frozen spinach'},
      {quantity: 50, quantityType: 'mL', name: 'cream'},
      {quantity: 250, quantityType: 'g', name: 'paneer'},
    ],
    method: [
      'Drizzle a lug of oil into a large non-stick frying pan over a medium heat, add the paneer and fry for 5 minutes, or until golden, stirring frequently. Using a slotted spoon, transfer to a double layer of kitchen paper to drain.',
      'Peel and finely chop the onion, garlic and ginger.',
      'Return the pan to a medium-low heat, adding a splash more oil, if needed. Add the cumin seeds, fry for 1 minute, then add the onion and cook for around 8 minutes, or until softened.',
      'Stir in the garlic, ginger, garam masala and turmeric. Halve, deseed and very finely chop the tomato, add to the pan and cook for a further 10 minutes, or until softened but not coloured, stirring occasionally.',
      'Stir in the frozen spinach, cover and cook for 5 minutes, then stir in the cream, paneer and a splash of boiling water.',
      'Reduce the heat to low and cook for a further 5 minutes with the lid off, or until reduced to a deliciously creamy consistency. Season to taste with sea salt and black pepper and serve immediately.',
    ],
    imagePath: 'https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/1443_1_1436884145.jpg?tr=w-800,h-1066https://img.jamieoliver.com/jamieoliver/recipe-database/oldImages/large/797_1_1436881994.jpg?tr=w-800,h-1066'
  }
]

export default seedRecipes
