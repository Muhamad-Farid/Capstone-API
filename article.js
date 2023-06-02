const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

//1
// Mock data for coffee types
const coffeeTypes = [
  {
    id: 1,
    title: 'Arabica',
    description: 'Arabica beans are by far the most popular type of coffee beans, making up about 60% of the world’s coffee. These tasty beans originated many centuries ago in the highlands of Ethiopia, and may even be the first coffee beans ever consumed! The name Arabica likely comes from the beans’ popularity in 7th-century Arabia (present-day Yemen).',
    image: 'https://www.foodandwine.com/thmb/XbKXqQvF61Csj9XLs_Nj3xwlwEI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Everything-You-Need-To-Know-About-Arabica-Coffee-FT-BLOG0822-2000-127d1551916e45138ea373de75f08138.jpg'
  },
  {
    id: 2,
    title: 'Robusta',
    description: 'Robusta adalah kjhaslnfk  aknlkas f',
    image: 'robusta.jpg'
  }
];

//2
// Mock data for coffee roasts
const coffeeRoasts = [
  {
    id: 1,
    title: 'Light Roast',
    description: 'Light roast beans have an aromatic flavor, with fruit and floral notes and good acidity. The beans themselves will be pale brown, with no trace of oil on the surface. A light roast is used when you want the beans’ natural flavors to be retained, such as with delicate coffees. Light roast coffees are best suited to pour-over brewing.',
    image: 'https://images.megapixl.com/526/5262944.jpg'
  },
  {
    id: 2,
    title: 'Medium Roast',
    description: 'Medium roast beans have a richer taste with more sweetness, some nuttiness, and a hint of bitterness. A medium roast has less acidity than a light roast. The beans should be medium brown, with no trace of oil on the surface, but with a stronger smell. You use this roast to create a pleasing aroma, flavor, and acidity balance. Medium roast beans are commonly used for brewing with automatic drip machines or making cold brew.',
    image: 'https://thumbs.dreamstime.com/b/single-coffee-bean-5262956.jpg'
  }
];

//3
// Mock data for coffee brewing methods
const coffeeBrewingMethods = [
  {
    id: 1,
    title: 'Drip Coffee',
    description: 'Drip coffee refers to coffee made in an automatic drip machine. The flavor of drip brew is mild and straightforward, so it lacks some complexity compared to other types of coffee. You make drip coffee via a filtration method, where hot water is poured slowly over coffee grounds held in a filter basket. Drip brewing method is popular because it requires minimal effort or knowledge to brew, and you can make it in large batches.',
    image: 'https://www.homegrounds.co/wp-content/uploads/2022/02/Automatic-drip-coffee-maker-and-coffee.jpeg'
  },
  {
    id: 2,
    title: 'Pour Over Coffee',
    description: 'Pour-over coffee is coffee made with various manual pour-over coffee makers. Pour-over coffee has a clean, crisp taste with complex flavors. Pour-over coffee is also made by a filtration method, but unlike drip coffee, the process is entirely manual. This provides a level of control that helps to bring out the intricate flavors.',
    image: 'https://www.homegrounds.co/wp-content/uploads/2019/09/chemex-kettle-and-coffee-beans.jpg'
  }
];

//4
// Mock data for coffee drinks
const coffeeDrinks = [
  {
    id: 1,
    title: 'Cappuccino',
    description: 'Cappuccino presumably originated in Italy in 1901, shortly after the invention of the espresso machine. However, the first official record of the cappuccino dates from 1930. Cappuccino is usually consumed at breakfast in Italy and continental Europe but is a popular drink at any time of day in other parts of the world.',
    image: 'https://static01.nyt.com/images/2015/10/02/fashion/02CAPP3SUB/02CAPP3SUB-superJumbo.jpg'
  },
  {
    id: 2,
    title: 'Espresso',
    description: 'Espresso is blablablablabla',
    image: 'https://www.espresso.jpg'
  }
];

// Get all coffee types
app.get('/typecoffee', (req, res) => {
  res.json({
    error: false,
    message: 'success',
    result: coffeeTypes
  });
});

// Get a specific coffee type
app.get('/typecoffee/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const coffeeType = coffeeTypes.find(type => type.id === id);
  if (!coffeeType) {
    res.status(404).json({ message: 'Coffee type not found' });
  } else {
    res.json({
      error: false,
      message: 'success',
      result: coffeeType
    });
  }
});

//2
// Get all coffee roasts
app.get('/typeroast', (req, res) => {
  res.json({
    error: false,
    message: 'success',
    result: coffeeRoasts
  });
});

// Get a specific coffee roast
app.get('/typeroast/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const coffeeRoast = coffeeRoasts.find(roast => roast.id === id);
  if (!coffeeRoast) {
    res.status(404).json({ message: 'Coffee roast not found' });
  } else {
    res.json({
      error: false,
      message: 'success',
      result: coffeeRoast
    });
  }
});


// Get all coffee brewing methods
app.get('/typebrew', (req, res) => {
  res.json({
    error: false,
    message: 'success',
    result: coffeeBrewingMethods
  });
});

// Get a specific coffee brewing method
app.get('/typebrew/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const brewingMethod = coffeeBrewingMethods.find(method => method.id === id);
  if (!brewingMethod) {
    res.status(404).json({ message: 'Coffee brewing method not found' });
  } else {
    res.json({
      error: false,
      message: 'success',
      result: brewingMethod
    });
  }
});

// Get all coffee drinks
app.get('/typecoffeedrink', (req, res) => {
  res.json({
    error: false,
    message: 'success',
    result: coffeeDrinks
  });
});

// Get a specific coffee drink
app.get('/typecoffeedrink/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const coffeeDrink = coffeeDrinks.find(drink => drink.id === id);
  if (!coffeeDrink) {
    res.status(404).json({ message: 'Coffee drink not found' });
  } else {
    res.json({
      error: false,
      message: 'success',
      result: coffeeDrink
    });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
