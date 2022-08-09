async function getData() {
  const response = await fetch("http://10.0.0.2:5000/");
  const resp = await response.json();
  console.log(resp.message);
  let div_elem = document.createElement("div");
  div_elem.innerHTML = resp.message;
  document.body.appendChild(div_elem);
}

// getData();

async function sendData() {
  let name = document.getElementById("user").value;
  let age = document.getElementById("age").value;
  let address = document.getElementById("address").value;
  let mobile = document.getElementById("mobile").value;
  let status = document.getElementById("status").value;
  let url = "http://10.0.0.2:5000/";
  let inputdata = {
    name: name,
    age: age,
    address: address,
    mobile: mobile,
    status: status,
  };
  let response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputdata),
  });
  let respdata = await response.text();
  console.log(respdata);
  // let jsonData = JSON.parse(respdata);
  // console.log(jsonData);
  let elem = document.createElement("div");
  elem.innerHTML = respdata;
  document.body.appendChild(elem);
  // console.log(jsonData);
}

document.querySelector("#getdata").addEventListener("click", getData);
document.querySelector("#senddata").addEventListener("click", sendData);
