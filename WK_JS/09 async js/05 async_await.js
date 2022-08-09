// function loadScript(src) {
//   // creates a <script> tag and append it to the page
//   // this causes the script with given src to start loading and run when complete
//   let script = document.createElement("script");
//   script.src = src;
//   document.head.append(script);
// }

// loadScript("fetch.js");

async function myAsyncMethod() {
  //   debugger;
  const myPromise = new Promise(function (resolve) {
    setTimeout(function resolve(msg) {
      msg = "I am called after 5 seconds.";
      return msg;
    }, 5000);
  });

  const asyncMsg = await myPromise;
  console.log(asyncMsg);
}

// myAsyncMethod();
const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  alert("hi");
  myAsyncMethod();
});
