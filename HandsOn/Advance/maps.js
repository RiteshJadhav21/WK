let m = new Map();

m.set(1,"ritesh");
m.set(2,"umesh");

console.log(m.get(1))

for (let [k,v] of m){
    console.log(k,":",v)
}