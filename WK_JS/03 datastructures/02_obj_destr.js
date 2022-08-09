// object
const pizzaHut = {
  rname: "Pizza Hut",
  location: "Road No. 12, Banjara Hills, Hyderabad.",
  categories: ["pizzas", "sides", "desserts", "drinks"],
  sides: ["garlic bread", "bread sticks", "pasta", "rolls", "poppers"],
  opening_hrs: {
    mon: {
      open: 12,
      close: 23,
    },
    tue: {
      open: 12,
      close: 23,
    },
  },
};

// const rest_name = pizzaHut.rname;
// const opHrs = pizzaHut.opening_hrs;
// console.log(rest_name, opHrs);
// extracting specific attributes from the object
// const { rname: rest_name, opening_hrs: opHrs } = pizzaHut;
// console.log(rest_name, opHrs);

// // extracting object attributes with custom names
// const { rname: restaurantName, opening_hrs: timings } = pizzaHut;
// console.log(restaurantName, timings);

// handling non-existent properties with default values
// const { menu = [], sides: starters = {} } = pizzaHut;
// console.log(menu, starters);

// // destructuring into existing variables
let a = 111;
let b = 222;
const obj = { a: 1, b: 2 };
// console.log(obj.a, obj.b);
// let {a, b} = obj;
// {a, b} = obj;
({ a, b } = obj);
console.log(a, b);
