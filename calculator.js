let input = document.getElementById('input');

function addToInput(value) {
	input.value += value;
}

function clearInput() {
	input.value = '';
}

function calculate() {
	try {
		input.value = eval(input.value);
	} catch (error) {
		input.value = 'Error';
	}
}

const darkMode = document.querySelector("link");
const switchMode = document.getElementById("dark");

function changeMode() {
	darkMode.href = "dark-mode.css";
	switchMode.innerHTML = "Refresh Page to Switch Back to Normal";
}