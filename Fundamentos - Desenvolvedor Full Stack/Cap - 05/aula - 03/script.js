window.addEventListener('load', () => {
	console.log('...working FetchAPI');

	//https://api.github.com/users/rodrigofreitasit

	// Comando Fetch trabalha com conceito de promisse (promessa), que seria uma chamada
	// que em algum momento vai ser resolvida.
	// para capturar a resposta de sucesso da chamada é utilizado o .then e para capturar um erro usa-se .catch
	// como o dado não retorna em json é preciso pegar o parametro de response "res" e converter em json que em sua vez
	// também é uma promisse, e dessa promisse retorna "data" que são os dados retornados da api
	doFetch();
	doFetchAsync();
	executeDivision();
	executeDivisionAsync();
});

function doFetch() {
	fetch('https://api.github.com/users/rodrigofreitasit')
		.then((res) => {
			res.json().then((data) => {
				showData(data);
			});
		})
		.catch((error) => {
			console.log('Erro na requisição', error);
		});
}

async function doFetchAsync() {
	const res = await fetch('https://api.github.com/users/rodrigofreitasit');
	const json = await res.json();
	const { login, name } = json;
	console.log('login', login, 'name', name);
}
function showData(data) {
	const user = document.getElementById('user');
	user.textContent = 'user: ' + data.login + '  |  Nome:' + data.name;
}

//Criação de Promisse
function divisionPromise(a, b) {
	return new Promise((resolve, reject) => {
		if (b === 0) {
			reject('Não é possivel dividir por zero!');
		}
		return resolve(a / b);
	});
}

function executeDivision() {
	divisionPromise(10, 2)
		.then((result) => console.log('Resultado:', result))
		.catch((error) => {
			console.log(error);
		});
}

// async await
async function executeDivisionAsync() {
	const division = await divisionPromise(20, 2);
	console.log('Resultado:', division);
}
