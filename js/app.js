"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function display(string, length) {
		document.getElementById("display-truncated-value").textContent = string;

		if (length) {
			document.getElementById("display-number-value").textContent = length;
		} else {
			document.getElementById("display-number-value").textContent = "???";
		}
	}

	function truncate(string, max) {
		let length = string.length;

		if (string === "" || max === "") {
			return display("Enter values in both input fields");
		} else if (isNaN(max)) {
			return display("The max value must be a number");
		} else if (Number(max) % 1 !== 0) {
			return display("The number must be an integer");
		} else if (Number(max) < 0) {
			return display("The number must be positive");
		} else if (string.length > max) {
			string = string.slice(0, max) + "...";
		}
		
		return display(string, length);
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		truncate(this.children[0].value, this.children[1].value);
	});
};