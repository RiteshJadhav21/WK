(function () {
  const headerElement = document.querySelector("h1");
  headerElement.classList.add("blue");

  // closure example
  document.querySelector("button").addEventListener("click", function () {
    headerElement.classList.toggle("blue");
    headerElement.classList.toggle("cyan");
  });
})(); // iife example
