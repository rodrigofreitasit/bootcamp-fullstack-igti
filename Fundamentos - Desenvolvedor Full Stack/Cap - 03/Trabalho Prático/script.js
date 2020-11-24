window.addEventListener('load', start);

var red = document.querySelector('#inputRed'),
	green = document.querySelector('#inputGreen'),
	blue = document.querySelector('#inputBlue');

let r = red.value,
	g = green.value,
	b = blue.value;

function start() {
	console.log('Trabalho Prático');
	red.addEventListener('input', colorChange);
	green.addEventListener('input', colorChange);
	blue.addEventListener('input', colorChange);
}

function colorChange(e) {
	var id = e.target.id;
	var value = e.target.value;

	switch (id) {
		case 'inputRed':
			r = value;
			break;
		case 'inputGreen':
			g = value;
			break;
		case 'inputBlue':
			b = value;
			break;
	}
	// console.log(r, g, b);
	colorBox.style.background = `rgb(${r},${g},${b})`;
}
colorBox.style.background = `rgb(${r},${g},${b})`;
