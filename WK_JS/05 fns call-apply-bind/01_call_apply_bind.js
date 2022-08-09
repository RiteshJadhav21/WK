let person = {
  fname: "Nagaraj",
  lname: "Ravinuthala",
  title: "Mr.",

  displayName: function () {
    console.log(`${this.title} ${this.fname} ${this.lname}`);
  },
  displayOfficialName: function () {
    console.log(`${this.lname}, ${this.fname} ${this.title}`);
  },
};

// person.displayName();
// person.displayOfficialName();

let person1 = {
  fname: "Sreekar",
  lname: "Ravinuthala",
  title: "Master.",
};

let person2 = {
  fname: "Haasini",
  lname: "Ravinuthala",
  title: "Ms.",
};

// person.displayName.call(person1);
// person.displayName.call(person2);

// person.displayName.apply(person1);
// person.displayName.apply(person2);

let person1FullName = person.displayName.bind(person1);
let persone2FullOffName = person.displayOfficialName.bind(person2);

console.log(person1);
console.log(person2);

console.log(person1FullName);

person1FullName();
persone2FullOffName();
