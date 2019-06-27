"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function truncate(string, max) {
		if (string.length > max) {
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