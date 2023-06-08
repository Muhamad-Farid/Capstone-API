const express = require('express');
const router = express.Router();

// Mock data for coffee types
const coffeeTypes = [
    {
        id: 1,
        title: 'Arabica',
        description: 'Arabica coffee is the most commonly grown type of coffee, making up around 60% of commercially grown coffee. Arabica plants have the best quality when grown at high altitudes in volcanic soils, with plenty of rainfall. The downside to Arabica plants is that they are more susceptible to disease. Arabica coffee bean has an oval shape and is larger than a Robusta bean. \n There are dozens of varieties of Arabica coffee, including Bourbon, Caturra, Pacamara, and Typica. The extract taste of each Arabica coffee will depend on the variety, but it is generally sweeter and more complex than Robusta coffee. Good quality Arabica coffee has a medium body, bright acidity, and multiple layers of flavor and aroma. Most specialty coffees will be of the Arabica type.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee/Arabica.jpg'
    },
    {
        id: 2,
        title: 'Robusta',
        description: 'Robusta coffee is the second most common type of coffee, accounting for around 40% of coffee production. Robusta plants get their name because they are hardier than Arabica plants, and they are less prone to disease and grow well in wider environments, including low altitudes. Robusta beans are smaller, and rounder and have a higher concentration of caffeine than Arabica beans. \n Robusta coffee has many unidentified heirloom varieties, but you can categorize them into Erecta (upright varieties) or Nganda (spreading varieties). The taste of Robusta coffee beans is dark and earthy and can have bitter or burnt flavors. Although the flavor is considered inferior to Arabica, it can add complexity when used in Arabica-Robusta blends.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee/Robusta.jpg'
    },
    {
        id: 3,
        title: 'Liberica',
        description: 'Liberica coffee is relatively rare among commercial crops, accounting for less than 2% of the coffee produced worldwide. Liberica coffee grows taller than Arabica or Robusta, with trees reaching 20 meters high. Liberica beans are longer than other coffee types and have a unique hook shape at one end. Libera coffee is lower in caffeine than either Arabica or Robusta. \n Due to the rarity of Liberica coffee, its varieties are not well known. The taste of Liberica coffee is sweeter than Arabica, with strong fruit and floral flavors, and it also has a smokiness and full-body reminiscent of Robusta coffee. ',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee/Liberica.jpg'
    },
    {
        id: 4,
        title: 'Excelsa',
        description: 'Excelsa was once considered a different type of coffee but has now been reclassified as a subtype of Liberica. Like other Liberica coffees, Excelsa grows on tall trees rather than shrubs. Excelsa beans have a unique teardrop shape but are smaller than Liberica beans. \n Excelsa is a variety of Liberica and does not have any varieties itself. Excelsa coffee can develop sweet, fruity flavors with tart acidity when grown correctly.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee/Excelsa.jpg'
    }
];

// Mock data for coffee roasts
const coffeeRoasts = [
    {
        id: 1,
        title: 'Light Roast',
        description: 'Light roast beans have an aromatic flavor, with fruit and floral notes and good acidity. The beans themselves will be pale brown, with no trace of oil on the surface. A light roast is used when you want the beans’ natural flavors to be retained, such as with delicate coffees. Light roast coffees are best suited to pour-over brewing.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Roasts/Light%20Roast.jpg'
    },
    {
        id: 2,
        title: 'Medium Roast',
        description: 'Medium roast beans have a richer taste with more sweetness, some nuttiness, and a hint of bitterness. A medium roast has less acidity than a light roast. The beans should be medium brown, with no trace of oil on the surface, but with a stronger smell. You use this roast to create a pleasing aroma, flavor, and acidity balance. Medium roast beans are commonly used for brewing with automatic drip machines or making cold brew.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Roasts/Medium%20Roast.jpg'
    },
    {
        id: 3,
        title: 'Medium-Dark Roast',
        description: 'Medium-dark roast beans have deep flavors of chocolate and nuts, with a bittersweet aftertaste. With medium-dark roasts, you’ll find little to no acidity. These beans are a dark brown, with some oil on the surface. A medium-dark roast is best for French press, Moka pot, or espresso brewing.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Roasts/Medium-Dark%20Roast.jpg'
    },
    {
        id: 4,
        title: 'Dark Roast',
        description: 'Dark roast beans have a pronounced bitterness, a heavy mouthfeel, and nutty, chocolatey or toasty flavors. Dark roast beans have no acidity. These beans are black, with visible oil on the surface. Therefore, they are the most popular choice for making espresso.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Roasts/Dark%20Roast.jpg'
    }
];

// Mock data for coffee brewing methods
const coffeeBrewingMethods = [
    {
        id: 1,
        title: 'Drip Coffee',
        description: 'Drip coffee refers to coffee made in an automatic drip machine. The flavor of drip brew is mild and straightforward, so it lacks some complexity compared to other types of coffee. You make drip coffee via a filtration method, where hot water is poured slowly over coffee grounds held in a filter basket. Drip brewing method is popular because it requires minimal effort or knowledge to brew, and you can make it in large batches.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Brewed%20Coffee/Drip%20Coffee.jpeg'
    },
    {
        id: 2,
        title: 'Pour Over Coffee',
        description: 'Pour-over coffee is coffee made with various manual pour-over coffee makers. Pour-over coffee has a clean, crisp taste with complex flavors. Pour-over coffee is also made by a filtration method, but unlike drip coffee, the process is entirely manual. This provides a level of control that helps to bring out the intricate flavors.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Brewed%20Coffee/Pour%20Over%20Coffee.jpg'
    },
    {
        id: 3,
        title: 'Espresso',
        description: 'Espresso refers only to coffee made in an espresso machine. Espresso coffee must be brewed at 9 bars of pressure, with an extraction time of between 20-30 seconds, with a coffee to water ratio of 1:2. Espresso is a pressure brewing method where boiled water forces through finely-ground coffee. Espresso has a strong, concentrated taste. There are different kinds of espresso shots including ristretto, lungo, and doppio.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Brewed%20Coffee/Espresso.jpeg'
    },
    {
        id: 4,
        title: 'Cold Brew',
        description: 'Cold brew coffee is different from most other coffee types. Cold brew is made with cold rather than hot water, and it has a smooth, sweet taste with very low acidity. You make cold brew with the immersion brewing method, where you steep coffee grounds in cold water for 18-24 hours. No special coffee maker is required for cold brew coffee, and people often brew it in a mason jar.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Brewed%20Coffee/Cold%20Brew.jpg'
    }
];

// Mock data for coffee drinks
const coffeeDrinks = [
    {
        id: 1,
        title: 'Cappuccino',
        description: 'Cappuccino presumably originated in Italy in 1901, shortly after the invention of the espresso machine. However, the first official record of the cappuccino dates from 1930. Cappuccino is usually consumed at breakfast in Italy and continental Europe but is a popular drink at any time of day in other parts of the world. \n The classic cappuccino recipe is made with one part espresso, one part steamed milk, and one part milk foam. People often top it with cinnamon or chocolate powder. It has a smooth, slightly sweet taste, with a lightness from the foam.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Drinks/Cappuccino.jpg'
    },
    {
        id: 2,
        title: 'Espresso',
        description: 'Espresso coffee originated with the invention of the espresso machine. The first espresso machine was a bulk brewer invented in 1884 in Turin by Angelo Moriondo. The first single-serve espresso maker was patented in 1901 by Luigi Bezzera, and was put into production by the Pavoni company in 1905. \n Espresso coffee is made by forcing hot water through fine ground coffee at 9 bars of pressure. Espresso is a strong, concentrated coffee that makes it a great base for milk coffees.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Drinks/Espresso.jpg'
    },
    {
        id: 3,
        title: 'Americano',
        description: 'Americano is a hot coffee drink made with espresso and hot water. It is perhaps one of the most popular coffee drinks in the USA, after espresso. The Americano originated during World War 2, where American soldiers added hot water to espresso to help extend their coffee rations. Its also said that they were not used to the strong taste of the local espresso coffee.  \n Americano coffee is made by pulling a shot of espresso into a large cup, then topping it with hot water. It has a less-concentrated taste than espresso but more complex tasting notes than drip coffee.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Drinks/Americano.jpg'
    },
    {
        id: 4,
        title: 'Cortado',
        description: 'Cortado coffee is a hot coffee made from equal parts of espresso and steamed milk. It originates in the Basque region of Spain, but the exact history and age are unknown. Cortado spread to the United States in the 1960s, where it became known as Gibraltar and is also popular in Latin American countries.\n Cortado is made by pulling a single shot of espresso in a small glass then adding an equal amount of steamed milk, with no foam. This coffee drink has a strong taste that is well-balanced by the milk.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Drinks/Cortado.jpg'
    },
    {
        id: 5,
        title: 'Red Eye',
        description: 'Red Eye is one of the latest coffee-drink inventions. The history of the red eye is mainly unknown, but we know that it originated in the United States. Its name comes from the late-night red-eye flights that need an extra boost of caffeine to recover from.\n Red Eye coffee is made by adding a shot of espresso to a cup of drip coffee. Though not as concentrated as espresso, it has a strong coffee taste and is served without milk. It has a a few variations including lazy eye coffee, black eye coffee, and dead eye aka dripped eye coffee.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Drinks/Red%20Eye.png'
    },
    {
        id: 6,
        title: 'Cortado',
        description: 'CLatte is one of the most popular milky coffee drinks. The combination of coffee and milk dates back as far as the 17th century, but the latte as we know it today originates in the 1950s. The Caffe Mediterraneum in Berkeley, California, standardized it as a menu item, and it became more common as it spread to Seattle cafes in the 1980s.\n Latte consists of a shot of espresso, topped by two parts steamed milk and a small amount of milk foam. It has a sweeter, creamier taste than a cappuccino due to the higher ratio of steamed milk.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Drinks/Cortado.jpg'
    },
    {
        id: 7,
        title: 'Macchiato',
        description: 'Macchiato is a variation to a simple espresso shot. Macchiato is believed to date back to the 1980s in Italy. The story says that baristas would add a small dollop of foam to help waiters distinguish between plain espresso and espresso with a small amount of milk added.\n A macchiato, also known as espresso macchiato, is prepared by adding a small amount of steamed milk or milk foam to a shot of espresso. Unlike some other coffee drinks, there is no standard recipe, and the preparation varies from place to place. It has a strong taste of espresso, which is tempered slightly by milk. Here’s a step-by-step guide on how to make a macchiato.\n This coffee drink also has a latte variation called the latte macchiato.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Drinks/Macchiato.jpg'
    },
    {
        id: 8,
        title: 'Flat White',
        description: 'Flat white is yet another recently invented coffee drink. The first documented reference to the modern flat white coffee dates back to 1983 in Sydney, Australia, mentioned in the Miller’s Treat cafe review. Still, there are claims that the drink was prepared in cafes in both New Zealand and Australia, as far back as the 1960s.\n Flat white coffee is a double shot of espresso, topped with steamed milk, but no milk foam. It has a stronger coffee taste than a latte because of the extra shot of espresso. Read our detailed article on what a flat white coffee is to learn more.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Drinks/Flat%20White.jpg'
    },
    {
        id: 9,
        title: 'Cafe Au Lait',
        description: 'Cafe au Leit is coffee with milk. The first reference to the cafe au lait dates back to the late 1600s, when cafes first started appearing in Paris. Cafe au lait is simply the French term for “coffee with milk”, so this would have referred to any coffee served with milk, rather than a particular drink.\n Europeans usually prepare cafe au lait with a shot of espresso topped with warm milk. Still, Americans prepare it with concentrated drip coffee, topped with steamed milk. The taste will depend on the preparation, but it will generally have a milky taste like a latte.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Drinks/Cafe%20Au%20Lait.jpg'
    },
    {
        id: 10,
        title: 'Irish Coffee',
        description: 'Irish coffee is coffee with whiskey. Chef Joe Sheridan invented Irish coffee in 1943 who worked at the Fort Payne Airbase. One night his flight was canceled due to bad weather, and Sheridan created the coffee drink to keep the passengers warm.\n Original Irish coffee is prepared with strong brewed coffee, a shot of whiskey, brown sugar, and a whipped cream topping. It has a sweet, creamy taste with strong flavors of coffee and whiskey.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Drinks/Irish%20Coffee.jpg'
    },
    {
        id: 11,
        title: 'Turkish Coffee',
        description: 'Turkish coffee is a type of coffee drink that originates in Turkey. Coffee was first introduced to Turkey around 1540 by the Turkish governor of Yemen. It was first limited to the ruling classes, where the Sultan’s staff developed the method of preparation. By the 1550s, the general population enjoyed it, and coffee houses began to spread through Turkey.\n Turkish coffee is a method of brewing coffee. You make it by boiling water, sugar, and extra-fine coffee grounds together. Turkish coffee has a robust and sweet flavor, with a thick texture.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Drinks/Turkish%20Coffee.jpg'
    },
    {
        id: 12,
        title: 'Italian Coffee',
        description: 'Italian coffee has always been highly regarded and is well-known around the world. Italian-style coffee can be made from various beans and origins and is typically roasted on the darker side to give it the strong flavor and body that we have come to expect. Arabica coffee, which has a smoother, more acidic flavor than Robusta coffee and half the caffeine content, was almost entirely used to make Italian coffee.',
        image: 'https://storage.googleapis.com/c23-ps128/Types%20Of%20Coffee%20Drinks/Italian%20Coffee.png'
    }
];


router.get('/', (req, res) => {
    const { query } = req.query;
    const filteredCoffeeTypes = coffeeTypes.filter((coffeeType) =>
        coffeeType.title.toLowerCase().includes(query.toLowerCase())
    );
    const filteredCoffeeRoasts = coffeeRoasts.filter((coffeeRoast) =>
        coffeeRoast.title.toLowerCase().includes(query.toLowerCase())
    );
    const filteredBrewingMethods = coffeeBrewingMethods.filter((brewingMethod) =>
        brewingMethod.title.toLowerCase().includes(query.toLowerCase())
    );
    const filteredCoffeeDrinks = coffeeDrinks.filter((coffeeDrink) =>
        coffeeDrink.title.toLowerCase().includes(query.toLowerCase())
    );

    const count = filteredCoffeeTypes.length + filteredCoffeeRoasts.length + filteredBrewingMethods.length + filteredCoffeeDrinks.length;

    const results = [
        ...filteredCoffeeTypes.map(coffeeType => {
            return {
                id: coffeeType.id,
                type: 0,
                title: coffeeType.title,
                description: coffeeType.description,
                image: coffeeType.image
            };
        }),
        ...filteredCoffeeRoasts.map(coffeeRoast => {
            return {
                id: coffeeRoast.id,
                type: 1,
                title: coffeeRoast.title,
                description: coffeeRoast.description,
                image: coffeeRoast.image
            };
        }),
        ...filteredBrewingMethods.map(brewingMethod => {
            return {
                id: brewingMethod.id,
                type: 2,
                title: brewingMethod.title,
                description: brewingMethod.description,
                image: brewingMethod.image
            };
        }),
        ...filteredCoffeeDrinks.map(coffeeDrink => {
            return {
                id: coffeeDrink.id,
                type: 3,
                title: coffeeDrink.title,
                description: coffeeDrink.description,
                image: coffeeDrink.image
            };
        })
    ];

    const searchResults = {
        count,
        results
    };

    res.json(searchResults);
});

// Export the router
module.exports = router;
