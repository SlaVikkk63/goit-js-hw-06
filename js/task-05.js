const inputElement = document.querySelector('#name-input');
const outputElement = document.querySelector('#name-output');

inputElement.addEventListener(`input`, el => {

outputElement.textContent = el.target.value;

const newValue = el.currentTarget.value;

if(newValue.trim() === '' ){

	outputElement.textContent = newValue

	outputElement.textContent = "Anonymous";
}

})

// const inputEl = document.querySelector("#name-input");
// const spanEl = document.querySelector("#name-output");

// inputEl.addEventListener("input", (event) => {
// 	spanEl.textContent = event.target.value;
// 	if (event.target.value === "") {
// 		spanEl.textContent = "Anonymous";
// 	}
// });