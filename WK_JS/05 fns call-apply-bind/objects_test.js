"use strict";
const spicejet = {
  operator: "Spice Jet",
  iataCode: "SG",
  bookings: [],

  bookTicket(flightNo, pName, src, dest) {
    console.log(
      `Hello ${pName}, Your ticket from ${src} to ${dest} booked on ${this.operator} flight number ${this.iataCode}${flightNo}.`
    );
    this.bookings.push({
      pName,
      flightNo,
    });
    // console.log(`current object is ${this}`);
  },
};

// airline.bookTicket();
// console.log("hello from index html");
// const bookTicketMethod = spicejet.bookTicket;

const indigo = {
  operator: "Indigo",
  iataCode: "6E",
  bookings: [],
};

const vistara = {
  operator: "Vistara",
  iataCode: "UK",
  bookings: [],
};

const vist_passngr_details = ["230", "Karthik", "Chn", "Hyd"];

// bookTicketMethod.call(indigo, "149", "Nagaraj", "Blr", "Hyd");
// spicejet.bookTicket("650", "Sreekar", "Hyd", "Blr");
// spicejet.bookTicket.call(indigo, "149", "Nagaraj", "Blr", "Hyd");
// spicejet.bookTicket.apply(vistara, vist_passngr_details);

// bookTicketMethod();
// document.querySelector("#btn").addEventListener("click", bookTicketMethod);

// let flightNo = document.getElementById("fNum").value;
// let pName = document.getElementById("pName").value;
// let src = document.getElementById("src").value;
// let dest = document.getElementById("dest").value;

const bookVistaraTickets = spicejet.bookTicket.bind(vistara);
const bookIndigoTickets = spicejet.bookTicket.bind(indigo);

// bookVistaraTickets("230", "Karthik", "Chn", "Hyd");
// bookIndigoTickets("149", "Nagaraj", "Blr", "Hyd");

// IIFE

// convert the below pesudo code into proper working code by defining an array of old account numbers and migrate them into some new account number format
// for acctno of acctnos {
// (function (oldaccnt) {
//     if old accnt no atisfies soem condition then
//     newaccnt = "Some prefix" + oldaccnt
//     push newaant to db
// })(acctno);
// }
