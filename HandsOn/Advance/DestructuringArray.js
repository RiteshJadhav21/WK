// let user = ["Ritesh", 25, "Shahada"];
		
// let [name, age, city] = user;

// console.log(name);
// console.log(age);
// console.log(city);


// //Using Default Value
// let user =["Ritesh", 25, "Shahada"];
		
// let [name, age = 20, city] = user;


// With Nested Array
// let user = ["Ritesh", 25, "Shahada", ["Male", 25000]];
// let [name, age = 20, city,[gender, salary]] = user;

// console.log(gender);
// console.log(salary);


// Using Rest Operator 
// let user = ["Ritesh", 25, "Shahada"];

// let [name, ...args] = user;

// console.log(name);
// console.log(args);


// Using with function
// function user([name, age = 20, city]){
// 	console.log(name);
// 	console.log(age);
// 	console.log(city);
// }

// user(["Ritesh", 25, "Shahada"]);


// Return an Array from Function
// function user(){
//    return ["Ritesh", 25, "Shahada"];
// }

// let [name, age = 20, city] = user();

// console.log(city); 