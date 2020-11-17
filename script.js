var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var code =  document.querySelector("h3");
var gradient = document.querySelector("body");
var random = document.getElementById("random");
var randomColor =  '#'+Math.floor(Math.random()*16777215).toString(16)


function changeBackground() {
	gradient.style.background = "linear-gradient(to right," + color1.value + " , " + color2.value + ")";
	code.textContent = gradient.style.background + ";";
}


color1.addEventListener("input", changeBackground);
color2.addEventListener("input", changeBackground);



random.addEventListener("click", function() {
	gradient.style.background = "linear-gradient(to right," + '#'+Math.floor(Math.random()*16777215).toString(16)+ " , " + '#'+Math.floor(Math.random()*16777215).toString(16) + ")";
	code.textContent = gradient.style.background + ";";
}
)
