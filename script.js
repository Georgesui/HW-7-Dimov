let selectedElements = document.querySelector('#elements');
const circleTosquare = document.querySelector('#card')
selectedElements.addEventListener('change', (eventTouch) => {
	let newValue = eventTouch.target.value;
	circleTosquare.classList.toggle(newValue)
})