console.log('...working');
// var tem escopo abrangente
//let tem escopo reduzido
function withVar() {
	for (var i = 0; i < 10; i++) {
		console.log('var' + i);
	}
	i = 20;
	console.log(i);
}

function withLet() {
	for (let i = 0; i < 10; i++) {
		console.log('let' + i);
	}
	i = 10;
	console.log(i);
}
withVar();
withLet();

//const não é permitido reatribuir

const r = 'rodrigo';
// a = 'leila';

// função comum
function sum1(a, b) {
	return a + b;
}

// função anonima
const sum2 = function (a, b) {
	return a + b;
};

// arrow function
const sum3 = (a, b) => {
	return a + b;
};
// arrow function reduzida
const sum4 = (a, b) => a + b;

console.log(sum1(2, 5));
console.log(sum2(2, 5));
console.log(sum3(2, 5));
console.log(sum4(2, 5));

//template literals

const nome = 'Rodrigo';
const sobrenome = 'Freitas';

const completeName = `Meu nome é ${nome} e meu sobrenome é ${sobrenome}`;

console.log(completeName);

//default parameters
// caso o parametro B nao seja enviado irá assumir o valor padrao de 0
const sum5 = (a, b = 0) => a + b;
console.log(sum5(5, 5));
