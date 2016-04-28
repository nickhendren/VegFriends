angular.module('starter.services', [])

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png',
    numberReview: 4,
    rating: 10,
    place: 'True Food Kitchen',
    imageFront: 'img/truefoodkitchen.jpg',
    imageIndoor: 'img/truefoodkitchenindoor.jpg',
    imageFood: 'img/truefoodkitchenfood.jpg',
    address: '395 Santa Monica Pl (at 2nd St.), Santa Monica, CA 90401',
    phone: '(310) 593-8300',
    website: 'truefoodkitchen.com',
    hours: 'Mon–Fri 11:30AM – 10:00PM | Sat–Sun 10:00AM – 10:00PM',
    menu: {
      item1: 'Braised Artichoke - Spring onion, english pea & lemon ricotta',
      item2: 'Spaghetti Squash Casserole - Fresh mozzarella, organic tomato & zucchini',
      item3: '"Inside Out" Quinoa Burger - Hummus, tzatziki, tomato, cucumber, red onion, avocado & feta'
    }
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png',
    numberReview: 4,
    rating: 10,
    place: 'sweetgreen',
    imageFront: 'img/sweetgreen.jpg',
    imageIndoor: 'img/sweetgreenindoor.jpg',
    imageFood: 'img/sweetgreenfood.jpg',
    address: '1343 4th St, Santa Monica, CA 90401',
    phone: '(424) 744-8321',
    website: 'sweetgreen.com',
    hours: 'Mon–Sun 10:30AM – 10:00PM',
    menu: {
      item1: 'Umami Grain Bowl (555 cal) - Organic quinoa + farro, swiss chard, pea shoots, roasted mushrooms, red onion, roasted tofu, spicy sunflower seeds, miso sesame ginger dressing',
      item2: 'Not So Niçoise (545 cal) - Organic mesclun, chopped romaine, roasted asparagus, roasted potatoes, hard boiled egg, roasted steelhead, horseradish vinaigrette',
      item3: 'Organic Lentil Chickpea Soup (160-240 cal) - This 100% organic soup is made with hearty lentils and chickpeas with diced carrots, onions and celery'
    }
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg',
    numberReview: 4,
    rating: 10,
    place: 'Seasons 52',
    imageFront: 'img/seasons52.jpg',
    imageIndoor: 'img/seasons52indoor.jpg',
    imageFood: 'img/seasons52food.jpg',
    address: '1501 Ocean Ave, Santa Monica, CA 90401',
    phone: '(310) 451-1152',
    website: 'm.seasons52.com/home',
    hours: 'Mon-Thu 11:00AM - 10:00PM | Fri-Sat 11:00AM - 11:00PM | Sun 10:00AM - 10:00PM',
    menu: {
      item1: 'Hummus Duo with Crisp Hawaiian Sea Salt Lavosh - Minted edamame hummus, roasted red pepper hummus',
      item2: 'Roasted Roma Tomato - Fresh mozzarella cheese, parmesan, ribbons of basil',
      item3: 'Spring Vegetarian Tasting - Quinoa-citrus salad, soft taco, seasonal vegetables, cedar-roasted tofu, tropical salsa'
    }
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png',
    numberReview: 4,
    rating: 10,
    place: 'R+D Kitchen',
    imageFront: 'img/r+dkitchen.jpg',
    imageIndoor: 'img/r+dkitchenindoor.jpg',
    imageFood: 'img/r+dkitchenfood.jpg',
    address: '1323 Montana Ave (at 14th St), Santa Monica, CA 90403',
    phone: '(310) 395-3314',
    website: 'rd-kitchen.com',
    hours: 'Mon–Fri 11:30AM – 10:00PM | Sat–Sun 10:00AM – 10:00PM',
    menu: {
      item1: 'Veggie Burger - Brown rice, mushrooms, almonds & melted jack',
      item2: 'Spinach & Cheese Omelet - With mixed greens, campari tomato & griddled toast — choice of baby swiss, goat, cheddar or jack cheese',
      item3: 'Deviled Eggs'
    }
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
