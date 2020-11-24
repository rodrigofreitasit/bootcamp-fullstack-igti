window.addEventListener('load', () => {
	console.log('working...');
	const timer = document.querySelector('#timer');
	const btnCancelar = document.querySelector('#btnCancelar');
	let countSeg = 0;

	const secInterval = setInterval(() => {
		timer.textContent = ++countSeg;

		if (countSeg === 11) {
			clearInterval(secInterval);
			// timer.textContent = ++countSeg;
			timer.textContent = 'fim';
			return;
		}
	}, 1000);

	btnCancelar.addEventListener('click', (e) => {
		if (e.target.type === 'submit') {
			clearInterval(secInterval);
		}
	});
});
