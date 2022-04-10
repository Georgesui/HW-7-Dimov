let selectedElements = document.querySelector('#elements');
const circleTosquare = document.querySelector('#card')
selectedElements.addEventListener('change', (eventTouch) => {
	let newValue = eventTouch.target.value;
	circleTosquare.setAttribute('class', newValue)
})

let ourColorInput = document.querySelector('#colorValue');
let buttonForColor = document.querySelector('button');
if (ourColorInput.value = '#000000') {
	circleTosquare.style.backgroundColor = '#000000'
}
buttonForColor.addEventListener('click', (event) => {
	circleTosquare.style.backgroundColor = ourColorInput.value;
})