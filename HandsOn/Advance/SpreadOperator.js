
// with array
function sum(name,...args){
	console.log(arguments);

	document.write(`Hello ${name} : `);

	let sum = 0;
	for(let i in args){
		sum += args[i];
	}

	document.write(sum);
}

var arr = [20,30,40];
sum("Ritesh",...arr);


// with obj

var obj1 = {
	name : "Ritesh",
	course : "Btech"
}

var obj2 = {
	age : 25
}

var obj3 = {...obj1, ...obj2};
	
console.log(obj3);