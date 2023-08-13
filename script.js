//your JS code here. If required.
let div = document.getElementById("line");

let keyFrames = [
	{transform : "rotate(0deg)"},
	{transform : "rotate(360deg)"}
]
let animationProperty = {
	duration: 2000,
	iterations : Infinity
}

div.animate(keyFrames, animationProperty);