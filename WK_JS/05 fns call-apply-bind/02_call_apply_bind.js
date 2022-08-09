const airline = {
  airLines: "Spice Jet",
  iataCode: "SG",
  bookings: [],
  bookTickets: function (flightNo, pName, source, dest) {
    console.log(
      `Your ticket from ${source} to ${dest} booked on ${this.airLines} flight number ${this.iataCode}${flightNo}.`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNo}`,
      pName,
      source,
      dest,
    });
  },
  displayBooking() {
    console.log(this.bookings);
  },
  showThis() {
    console.log(this);
  },
};

// const airline = {
//   airLines: "Spice Jet",
//   iataCode: "SG",
//   bookings: [],
//   bookTickets: function () {
//     flightNo = document.getElementById("fNum").value;
//     pName = document.getElementById("pName").value;
//     source = document.getElementById("src").value;
//     dest = document.getElementById("dest").value;
//     console.log(
//       `Your ticket from ${source} to ${dest} booked on ${this.airLines} flight number ${this.iataCode}${flightNo}.`
//     );
//     this.bookings.push({
//       flight: `${this.iataCode}${flightNo}`,
//       pName,
//       source,
//       dest,
//     });
//   },
//   displayBooking() {
//     console.log(this.bookings);
//   },
//   showThis() {
//     console.log(this);
//   },
// };
// airline.showThis();
// airline.bookTickets("150", "Nagaraj", "Hyd", "Mum");
// airline.displayBooking();

const bookOtherTickets = airline.bookTickets;
console.log(bookOtherTickets);

// bookOtherTickets("129", "Nagaraj", "Del", "Blr");

const vistara = {
  airLines: "Vistara",
  iataCode: "UK",
  bookings: [],
  // bookVistaraTickets: airline.bookTickets,
  // displayVistaraBookings: airline.displayBooking,
  // showVistara: airline.showThis,
};

// vistara.bookVistaraTickets("129", "Nagaraj", "Del", "Blr");
// vistara.displayVistaraBookings();
// vistara.showVistara();

// bookOtherTickets.call(vistara, "126", "Nagaraj", "Mum", "Blr");
// airline.bookTickets.call(vistara, "129", "Nagaraj", "Del", "Blr");
// airline.displayBooking.call(vistara);

const indigo = {
  airLines: "Indigo",
  iataCode: "6E",
  bookings: [],
};
bookOtherTickets.call(indigo, "126", "Nagaraj", "Mum", "Blr");
// airline.bookTickets.call(indigo, "135", "Nagaraj", "Blr", "Del");
// airline.displayBooking.call(indigo);
// airline.showThis.call(indigo);

const ticketDetails = ["190", "Nagaraj", "Del", "Blr"];
// bookOtherTickets.apply(indigo, ticketDetails);

airline.bookTickets.apply(vistara, ticketDetails);
// airline.displayBooking.apply(vistara);
// airline.showThis.apply(vistara);

const bookSpiceTickets = airline.bookTickets.bind(airline);
const bookVistaraTickets = airline.bookTickets.bind(vistara);
const bookIndigoTickets = airline.bookTickets.bind(indigo);

const displayIndioBooking = airline.displayBooking.bind(indigo);

bookIndigoTickets("100000", "John Doe", "London", "MUnich");
displayIndioBooking();

// setTimeout(airline.showThis, 3000);
// document.getElementById("btn").addEventListener("click", bookIndigoTickets);
