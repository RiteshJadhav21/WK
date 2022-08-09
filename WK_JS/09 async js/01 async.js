// synchronous operation - blocking

const p = document.querySelector("#text");
p.textContent = "I will turn red soon.";

// synchronous - blocking
// alert("Waiting due to sync call. Click to continue.");
// p.style.backgroundColor = "red";

// asynchronous - non blocking
setTimeout(function () {
  p.style.backgroundColor = "red";
}, 3000);
p.style.color = "cyan";
// alert("hi");

// another async call to set time interval
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("timer").innerHTML =
    // d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    `${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`;
}

// // sync call
const para = document.createElement("p");
para.innerText = "Good bye.";
document.body.appendChild(para);
