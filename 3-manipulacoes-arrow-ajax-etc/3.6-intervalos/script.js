// setInterval()
let timer;

function comecar() {
	timer = setInterval(showTime, 1000);
}

function parar() {
	clearInterval(timer);
}

function showTime() {
	let date = new Date();
	let h = date.getHours();
	let m = date.getMinutes();
	let s = date.getSeconds();
	let txt = h + ":" + m + ":" + s;

	document.querySelector(".demo").innerHTML = txt;
}

/*
setTimeOut() 
Ele roda e depois de um tempo para.
*/

setTimeout(function () {
	alert("Rodou!");
}, 2000);
