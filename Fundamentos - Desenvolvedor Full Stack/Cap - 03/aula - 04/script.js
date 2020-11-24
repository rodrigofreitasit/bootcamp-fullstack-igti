console.log('Working 04...');

window.addEventListener('load', start);

function start() {
	var inputName = document.querySelector('#inputName');
	inputName.addEventListener('keyup', count);

	var form = document.querySelector('form');
	form.addEventListener('submit', preventSubmit);
}

function count(e) {
	var count = e.target.value;
	var span = document.querySelector('#nameLength');
	span.textContent = count.length;
}

function preventSubmit(event) {
	event.preventDefault();

	var inputName = document.querySelector('#inputName');
	alert(inputName.value + ' cadastrado com sucesso!');
}
