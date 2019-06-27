"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function truncate(string, max) {

		if (string === "" || max === "") {
			return "Enter values in both input fields";
		} else if (isNaN(max)) {
			return "The max value must be a number";
		} else if (Number(max) % 1 !== 0) {
			return "The number must be an integer";
		} else if (Number(max) < 0) {
			return "The number must be positive";
		} else if (string.length > max) {
			string = string.slice(0, max) + "...";
		}
		
		return string;
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		truncate(this.children[0].value, this.children[1].value);
	});
};