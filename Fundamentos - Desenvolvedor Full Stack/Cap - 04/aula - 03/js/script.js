window.addEventListener('load', () => {
	console.log('...working');
	doSpread();
	doRest();
	doDestructuring();
});

// concatena dois vetores (arrays ou objetos) dentro de um novo
// é utilizado os '...' no inicio do nome do vetor para espalhar o array
function doSpread() {
	const marriedMan = people.results.filter((person) => {
		return person.name.title === 'Mr';
	});
	const marriedWomen = people.results.filter((person) => {
		return person.name.title === 'Ms';
	});
	const marriedPeople = [...marriedMan, ...marriedWomen];
	console.log(marriedPeople);
}

// rest realiza a soma dentro do vetor
// string é feita uma concatenação
function doRest() {
	console.log(infiniteSum('Rodrigo', 'Camilla'));
}

function infiniteSum(...numbers) {
	return numbers.reduce((acc, curr) => acc + curr, '');
}

//Compativel com array e objetos
function doDestructuring() {
	const pessoa = people.results.map((person) => {
		return person.login;
	});
	for (let i = 0; i < pessoa.length; i++) {
		const pessoas = pessoa[i];
		const { username, password } = pessoas;
		console.log('username:', username, '|', 'password:', password);
	}
}
