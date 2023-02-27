import './css/styles.css';
import debounce from "lodash.debounce";


const DEBOUNCE_DELAY = 300;
const fetchUsersBtn = document.querySelector("#search-box");
const userList = document.querySelector(".country-info");
// import { fetchCountries } from "./fetchCountries.js"; 

// refs.form.addEventListener('input', throttle(onInput, 500)); 
// fetchUsersBtn.value
// let parameter = fetchUsersBtn.value; 
// fetchUsersBtn.addEventListener("input", debounce(fetchCountries, DEBOUNCE_DELAY)); 

// const aaa = function fetchCountries(parameter) { };

fetchUsersBtn.addEventListener("input", debounce(fetchCountries, DEBOUNCE_DELAY));
// let debounceFetchCountries = debounce(fetchCountries('Italy'), DEBOUNCE_DELAY); 
// fetchUsersBtn.addEventListener("input", debounceFetchCountries);


function fetchCountries () { 
    fetch(`https://restcountries.com/v3.1/name/${fetchUsersBtn.value}?fields=name,capital,population,flags,languages`)
    // fetch(`https://restcountries.com/v3.1/name/${fetchUsersBtn.value}?fields=name,capital,population,flags,languages`)
    .then((response) => response.json())
    .then((data) => {

        console.log(data[0].name.common);
        console.log(data[0].capital[0]);
        console.log(data[0].population);
        console.log(data[0].flags.svg);
        console.log(Object.values(data[0].languages)
                  .toString().split(",").join(", ")); 


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

// export { fetchCountries };


        //   Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
        // },
        // ).catch(({ position, delay }) => {
        //   Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);