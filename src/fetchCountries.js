import Notiflix from 'notiflix';
const userList = document.querySelector(".country-info");

const fetchCountries = function (value) {

    fetch(`https://restcountries.com/v3.1/name/${value}?fields=name,capital,population,flags,languages`)
  
        .then((response) => response.json())
        .then((data) => {
            const contryCount = data.length;
            if (contryCount > 10) { Notiflix.Notify.info('Too many matches found. Please enter a more specific name.'); }
            if (contryCount > 1 && contryCount <= 10) { 
                let innerData = "<ul class = \"contry-list\">";
                for (const contry of data) {
                    innerData += `<li class = \"contry-item\"> <img width=20 height=12 alt="${contry.name.common}" src="${contry.flags.svg}"> ${contry.name.common} </li>`;
                }
                innerData += "</ul>";
                userList.innerHTML = innerData;
            }

            // console.log(data[0].name.common);
            // console.log(data[0].capital[0]);
            // console.log(data[0].population);
            // console.log(data[0].flags.svg);
            // console.log(Object.values(data[0].languages)
            //     .toString().split(",").join(", "));
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