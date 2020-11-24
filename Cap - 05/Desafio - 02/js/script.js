// Variaveis de estado
let tabCountries = null,
	tabFavorites = null,
	allCountries = [],
	favoriteCountries = [],
	countCountries = 0,
	countFavorites = 0,
	totalPopulationList = 0,
	totalPopulationFavorites = 0,
	numberFormat = null;

window.addEventListener('load', () => {
	console.log('... Desafio 02 ...');
	tabCountries = document.querySelector('#tabCountries');
	countCountries = document.querySelector('#countCountries');
	totalPopulationList = document.querySelector('#totalPopulationList');
	tabFavorites = document.querySelector('#tabFavorites');
	countFavorites = document.querySelector('#countFavorites');
	//prettier-ignore
	totalPopulationFavorites = document.querySelector('#totalPopulationFavorites');
	numberFormat = Intl.NumberFormat('pt-BR');

	fetchCountries();
});

async function fetchCountries() {
	const res = await fetch('https://restcountries.eu/rest/v2/all');
	const json = await res.json();
	allCountries = json
		.map((country) => {
			const { numericCode: id, translations, population, flag } = country;
			return {
				id,
				name: translations.pt,
				population,
				formattedPopulation: formatNumber(population),
				flag,
			};
		})
		.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
	// favoriteCountries = allCountries;
	render();
}

function render() {
	renderCountryList();
	renderFavorites();
	renderSummary();
	handleCountryButtons();
}

//Cria a lista com todos os paises
function renderCountryList() {
	let countriesHTML = '<div>';

	allCountries.forEach((country) => {
		const { id, name, flag, formattedPopulation } = country;
		let countryHTML = `
		<div class='country'>
			<div>
				<a id="${id}" class="waves-effect waves-light btn">+</a>
			</div>
			<div>
			    <img src="${flag}" alt="${name}" title="${name}">
			</div>
			<div>
			  <ul>
			    <li>${name}</li>
			    <li>${formattedPopulation}</li>
			  </ul>
			</div>
		</div>
		`;
		countriesHTML += countryHTML;
	});

	countriesHTML += '</div>';
	tabCountries.innerHTML = countriesHTML;
}

//Cria a lista com todos os paises favoritos
function renderFavorites() {
	let favoritesHTML = '<div>';
	favoriteCountries.forEach((country) => {
		const { id, name, flag, formattedPopulation } = country;
		let favoriteHTML = `
		<div class='country'>
			<div>
				<a id="${id}" class="waves-effect waves-light btn red darken-1">-</a>
			</div>
			<div>
			    <img src="${flag}" alt="${name}" title="${name}">
			</div>
			<div>
			  <ul>
			    <li>${name}</li>
			    <li>${formattedPopulation}</li>
			  </ul>
			</div>
		</div>
		`;
		favoritesHTML += favoriteHTML;
	});
	favoritesHTML += '</div>';
	tabFavorites.innerHTML = favoritesHTML;
}
function renderSummary() {
	//Total de paises nas listas
	countCountries.textContent = allCountries.length;
	countFavorites.textContent = favoriteCountries.length;

	//Total de População
	totalPopulation = allCountries.reduce((acc, curr) => {
		return acc + curr.population;
	}, 0);

	//Total de População favorita
	totalFavorites = favoriteCountries.reduce((acc, curr) => {
		return acc + curr.population;
	}, 0);

	totalPopulationList.textContent = formatNumber(totalPopulation);
	totalPopulationFavorites.textContent = formatNumber(totalFavorites);
}
function handleCountryButtons() {
	const countryButtons = Array.from(tabCountries.querySelectorAll('.btn'));
	const countryFavorites = Array.from(tabFavorites.querySelectorAll('.btn'));

	countryButtons.forEach((button) => {
		button.addEventListener('click', () => addToFavorites(button.id));
	});

	countryFavorites.forEach((button) => {
		button.addEventListener('click', () => removeFromFavorites(button.id));
	});
}

function addToFavorites(id) {
	const countryToAdd = allCountries.find((country) => country.id === id);
	// adiciona ao array o pais encontrado acima
	favoriteCountries = [...favoriteCountries, countryToAdd];

	// lista em ordem alfabetica
	favoriteCountries.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});

	// olha qual o id esta chegando e remove do filter
	allCountries = allCountries.filter((country) => country.id !== id);
	render();
}
function removeFromFavorites(id) {
	const countryToRemove = favoriteCountries.find(
		(country) => country.id === id
	);
	//adiciona o pais ao array de todos paises
	allCountries = [...allCountries, countryToRemove];

	//ordena a lista em ordem alfabetica
	allCountries.sort((a, b) => {
		return a.name.localeCompare(b.name);
	});

	// remove do favorito o pais
	favoriteCountries = favoriteCountries.filter((country) => country.id !== id);
	render();
}

function formatNumber(number) {
	return numberFormat.format(number);
}
