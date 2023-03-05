import Notiflix from 'notiflix';
const userList = document.querySelector(".country-info");

const fetchCountries = function (query) {

    let q = query.trim();
    if (q.length === 0) {
        userList.innerHTML = "";
        return;
    }

    fetch(`https://restcountries.com/v3.1/name/${q}?fields=name,capital,population,flags,languages`)

        .then(response => {
            if (!response.ok) {
                Notiflix.Notify.failure(`Oops, there is no country with that name`);
            }
            return response.json();
        })
        .then((data) => {
            const contryCount = data.length;
            if (contryCount > 10) { Notiflix.Notify.info('Too many matches found. Please enter a more specific name.'); }
            if (contryCount > 1 && contryCount <= 10) {
                let innerData = "<ul class = \"contry-list\">";
                for (const contry of data) {
                    innerData += `<li class = "contry-item"> <img width=20 height=12 alt="${contry.name.common}" src="${contry.flags.svg}"> ${contry.name.common} </li>`;
                }
                innerData += "</ul>";
                userList.innerHTML = innerData;
            }
            if (contryCount === 1) {
                let innerData = `<h3>
                <img width=24 height=14 alt="${data[0].name.common}" src="${data[0].flags.svg}">
                ${data[0].name.common}
                </h3>
                <ul class = \"contry-list\">
                    <li class = \"contry-item\"><b>Capital:</b>  ${data[0].capital[0]} </li>
                    <li class = \"contry-item\"><b>Population:</b>  ${data[0].population} </li>
                    <li class = \"contry-item\"><b>Languages:</b>  ${Object.values(data[0].languages).toString().split(",").join(", ")} </li>
                </ul>`;
                userList.innerHTML = innerData;
            }
        })
        .catch(error => {
            // console.log(error);
        });
}

export { fetchCountries };