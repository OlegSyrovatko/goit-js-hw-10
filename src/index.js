import './css/styles.css';
import debounce from "lodash.debounce";


const DEBOUNCE_DELAY = 300;
const box = document.querySelector("#search-box");

import { fetchCountries } from "./fetchCountries.js";


box.addEventListener("input", debounce(() => {
    fetchCountries(box.value)
}, DEBOUNCE_DELAY));





//   Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
// },
// ).catch(({ position, delay }) => {
//   Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);