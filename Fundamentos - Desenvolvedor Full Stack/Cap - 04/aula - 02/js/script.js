window.addEventListener('load', () => {
	console.log('...working');
	doMap();
	doFilter();
	doForEach();
	doReduce();
	doFind();
	doSome();
	doEvery();
	doSort();
	allWoman();
});

//transforma array em objeto
function doMap() {
	const nameEmail = people.results.map((person) => {
		return {
			name: person.name,
			email: person.email,
		};
	});
	console.log('#############    doMap    #############', nameEmail);
	return nameEmail;
}

//filtra de acordo com callback
function doFilter() {
	const olderThen50 = people.results.filter((person) => {
		return person.dob.age > 50;
	});
	console.log('#############    doFilter    #############', olderThen50);
}

//inclui nova propriedade no vetor
function doForEach() {
	const mappedPeople = doMap();

	mappedPeople.forEach((person) => {
		person.nameSize =
			person.name.title.length +
			person.name.first.length +
			person.name.last.length;
	});
	console.log('#############    doForEach    #############', mappedPeople);
}

// realiza soma das idades
//acc, curr são parametro da função reduce acc = acumulator / curr = current
//depois da função passa o valor inicial "0" neste exemplo
function doReduce() {
	const totalAges = people.results.reduce((acc, curr) => {
		return acc + curr.dob.age;
	}, 0);
	console.log('#############    doReduce    #############');
	console.log('reduce', totalAges);
}

//retorna o primeiro valor encontrado
function doFind() {
	const found = people.results.find((person) => {
		return person.location.state === 'Minas Gerais';
	});
	console.log('find', found);
}

//caso encontre retorna true ou se não encontrar false
function doSome() {
	const someMG = people.results.some((person) => {
		return person.location.state === 'Amazonas';
	});
	console.log('someMG', someMG);
}
//caso encontre retorna true ou se não encontrar false
function doEvery() {
	const everyPerson = people.results.every((person) => {
		return person.nat === 'BR';
	});
	console.log('everyPerson', everyPerson);
}

function doSort() {
	const mappedNames = people.results
		.map((person) => {
			return {
				name: person.name.first,
			};
		})
		.filter((person) => {
			return person.name.startsWith('R');
		})
		.sort((a, b) => {
			return a.name.localeCompare(b.name); // ordem alphabetica
			// return a.name.length - b.name.length; // ordena do maior ao menor nome
		});
	console.log(mappedNames);
}

function allWoman() {
	const famele = people.results
		.filter((person) => {
			return (
				person.gender === 'female' &&
				person.dob.age < 50 &&
				person.location.state === 'Rio de Janeiro'
			);
		})
		.map((person) => {
			return {
				name: person.name.first,
				idade: person.dob.age,
				sexo: person.gender,
				estado: person.location.state,
			};
		})
		.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
	console.log('#############    allWoman    #############', famele);
}
