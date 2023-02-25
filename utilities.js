const getCountries = (id) => {
    const getRegionName = document.getElementById(id).innerText;
    const regionName = getRegionName.toLowerCase();
    const url = `https://restcountries.com/v3.1/region/${regionName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesDiv = document.getElementById('country-container');
    countries.forEach(country => {

        const countryDiv = document.createElement('div')
        countryDiv.classList.add('mt-24')
        countryDiv.classList.add('grid')
        countryDiv.classList.add('gap-6')
        countryDiv.classList.add('md:grid-cols-2')
        countryDiv.classList.add('lg:grid-cols-3')
        countryDiv.classList.add('ml-7')
        countryDiv.innerHTML = `
        <div class="card w-96 bg-base-100 shadow-2xl rounded-xl">
                <figure><img src="${country.flags.png}" alt="Shoes" /></figure>
                <div class="card-body">
                    <h2 class="card-title text-2xl font-semibold">Name:  ${country.name.common}</h2>
                    <p class="font-medium">Capital: ${country.capital ? country.capital[0] : 'No Capital yet!!'}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary rounded-lg">See Details</button>
                    </div>
                </div>
            </div>
        `
        countriesDiv.appendChild(countryDiv)
    });


}