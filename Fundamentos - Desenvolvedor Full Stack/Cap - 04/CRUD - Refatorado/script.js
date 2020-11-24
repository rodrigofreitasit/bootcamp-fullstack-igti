let globaNames = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco'];
let inputName = null;
let isEditing = false;
let currentIndex = null;
window.addEventListener('load', () => {
	console.log('Working CRUD...');
	inputName = document.querySelector('#inputName');
	preventFormSubmit();
	activateInput();
	render();
});

// Evita o carregamento da página eo enviar o formulario
function preventFormSubmit() {
	var form = document.querySelector('form');
	form.addEventListener('submit', (e) => {
		e.preventDefault();
	});
}

//Ao Carregar a pagina da o focu no campo de input
function activateInput() {
	//insertName insere o novo nome no array globalNames
	function insertName(newName) {
		// globaNames.push(newName);
		globaNames = [...globaNames, newName];
		console.log(globaNames);
	}
	function updateName(newName) {
		globaNames[currentIndex] = newName;
	}
	//tratativa da digitação
	function handleTyping(e) {
		var hasText = !!e.target.value && inputName.value.trim() != '';
		if (!hasText) {
			clearInput();
			return;
		}
		if (e.key === 'Enter') {
			if (isEditing) {
				updateName(e.target.value);
				inputName.value = '';
			} else {
				insertName(e.target.value);
			}
			isEditing = false;
			clearInput();
			render();
		}
	}
	inputName.focus();
	inputName.addEventListener('keyup', handleTyping);
}

function render() {
	function createButton(index) {
		function deleteButton() {
			// globaNames.splice(index, 1);
			globaNames = globaNames.filter((_, i) => i !== index);
			render();
		}
		//cria o botão
		var button = document.createElement('button');
		button.classList.add('deleteButton');
		button.textContent = 'X';

		//escuta o evento de click do botão
		button.addEventListener('click', deleteButton);

		//retorna o botão criado para a função
		return button;
	}

	function createSpan(name, index) {
		function editItem() {
			inputName.value = name;
			inputName.focus();
			isEditing = true;
			currentIndex = index;
		}
		var span = document.createElement('span');
		span.classList.add('clickable');
		span.textContent = name;
		span.addEventListener('click', editItem);
		return span;
	}
	var divNames = document.querySelector('#names');
	divNames.innerHTML = '';
	//criar UL
	var ul = document.createElement('ul');
	//Cria li's de acordo com o vetor globaNames
	for (var i = 0; i < globaNames.length; i++) {
		var currentName = globaNames[i];
		var li = document.createElement('li');

		// faz a chamada na funçao que vai criar o bottão, passando o index
		var button = createButton(i);
		var span = createSpan(currentName, i);

		li.appendChild(button);
		li.appendChild(span);
		ul.appendChild(li);
	}
	divNames.appendChild(ul);
	clearInput();
}

const clearInput = () => {
	inputName.value = '';
	inputName.focus();
};
