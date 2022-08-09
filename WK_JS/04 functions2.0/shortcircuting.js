"use strict";
const bookings = [];
const bookFlight = function (flightNum, numPassengers, price) {
  //   short circuting - longer way
  // numPassengers = numPassengers || 1;
  // price = price || 2000;

  //   short circuting - shorter way
  numPassengers ||= 1;
  price ||= 2000;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookings.push(booking);
};

bookFlight("6E149");
bookFlight("6E149", 4);
bookFlight("6E149", 4, 10000);
console.log(bookings);
