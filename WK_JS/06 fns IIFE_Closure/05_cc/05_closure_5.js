(function () {
  const header = document.querySelector("h1");
  header.classList.add("blue");

  document.querySelector("button").addEventListener("click", function () {
    header.classList.toggle("blue");
    header.classList.toggle("cyan");
    // alert("hi");
  });
})();
