const fetchCountries = function (value) {

    // function fetchCountries(value) {
    fetch(`https://restcountries.com/v3.1/name/${value}?fields=name,capital,population,flags,languages`)
        // fetch(`https://restcountries.com/v3.1/name/${fetchUsersBtn.value}?fields=name,capital,population,flags,languages`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data.length);
            console.log(data[0].name.common);
            console.log(data[0].capital[0]);
            console.log(data[0].population);
            console.log(data[0].flags.svg);
            console.log(Object.values(data[0].languages)
                .toString().split(",").join(", "));
            // document.querySelector(".country-info").textContent = data[0].name.common;

            //   result.innerHTML = `
            //     <img src="${data[0].flags.svg}" class="flag-img">
            //     <h2>${data[0].name.common}</h2>
            //     <div class="wrapper">
            //         <div class="data-wrapper">
            //             <h4>Capital:</h4>
            //             <span>${data[0].capital[0]}</span>
            //         </div>
            //     </div>
            //     <div class="wrapper">
            //         <div class="data-wrapper">
            //             <h4>Continent:</h4>
            //             <span>${data[0].continents[0]}</span>
            //         </div>
            //     </div>
            //      <div class="wrapper">
            //         <div class="data-wrapper">
            //             <h4>Population:</h4>
            //             <span>${data[0].population}</span>
            //         </div>
            //     </div>
            //     <div class="wrapper">
            //         <div class="data-wrapper">
            //             <h4>Currency:</h4>
            //             <span>${
            //               data[0].currencies[Object.keys(data[0].currencies)].name
            //             } - ${Object.keys(data[0].currencies)[0]}</span>
            //         </div>
            //     </div>
            //      <div class="wrapper">
            //         <div class="data-wrapper">
            //             <h4>Common Languages:</h4>
            //             <span>${Object.values(data[0].languages)
            //               .toString()
            //               .split(",")
            //               .join(", ")}</span>
            //         </div>
            //     </div>
            //   `;
        })
        .catch(() => {
            //   if (countryName.length == 0) {
            //     result.innerHTML = `<h3>The input field cannot be empty</h3>`;
            //   } else {
            //     result.innerHTML = `<h3>Please enter a valid country name.</h3>`;
            //   }
        });
}

export { fetchCountries };