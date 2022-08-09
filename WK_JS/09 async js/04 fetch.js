const getCountryData = function (cName) {
  // new way of making AJAX request
  const myPromise = fetch(`https://restcountries.com/v3.1/name/${cName}`);
  console.log(myPromise);
  // fetch(`https://restcountries.com/v3.1/name/${cName}`);

  myPromise
    .then(function (resp) {
      //resolve rejectde
      console.log("in resolve");
      console.log(resp);
      const respJson = resp.json();
      return respJson;
    })
    .then(function (data) {
      const [dataElem] = data;
      console.log(dataElem);
    })
    .catch(function (error) {
      // reject code here
      console.log("in reject");
      console.log(error);
    })
    .finally(function () {
      console.log("Finally we are done.");
    });

  // resp
  //   .then(
  //     function (response) {
  //       // console.log(response.json());
  //       return response.json();
  //     }
  //     // function (error) {
  //     //   console.log(error);
  //     // }
  //   )
  //   .then(
  //     function (data) {
  //       console.log(data);
  //       // const [cData] = data;
  //       // console.log(cData);
  //     }
  //     // function (error) {
  //     //   console.log(error);
  //     // }
  //   )
  //   .catch(function (error) {
  //     console.log(error);
  //   });
};

// getCountryData("india");

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  getCountryData("sri lanka");
});
