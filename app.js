var buttStart = document.querySelector("#start");
var buttClose = document.querySelector("#close");
var moles = document.querySelectorAll(".mole");
var score = document.querySelector(".scores");
var minTime = 500;
var maxTime = 1000;
var duration = 20000;
var count = 6;
var scores = 0;
var sel, mole, nextTime, nextMole, prevMole, sto, endSto;

buttStart.addEventListener("click", startGame);
buttClose.addEventListener("click", closeAlert);
moles.forEach(item => {
	item.addEventListener("click", addScore);
});

function startGame() {
	prevMole = Math.floor(Math.random()*count);
	scores = 0;
	score.innerHTML = scores;
	document.querySelector(".alert").style.display = "none";
	clearTimeout(sto);
	clearTimeout(endSto);
	endSto = setTimeout(endGame, duration);
	toNew();
}

function step(ind) {
	sel = ".item" + (ind + 1);
	mole = document.querySelector(sel).querySelector(".mole");
	mole.classList.remove("hidden");
	nextTime = Math.round(Math.random()*(maxTime - minTime) + minTime);
	sto = setTimeout(toNew, nextTime);
}

function toNew() {
	if (mole) mole.classList.add("hidden");
	do {
		nextMole = Math.floor(Math.random()*count);
	} while (nextMole === prevMole);
	prevMole = nextMole;
	sto = setTimeout(step, 500, nextMole);
}

function addScore() {
	scores++;
	score.innerHTML = scores;
}

function endGame() {
	clearTimeout(sto);
	if (mole) mole.classList.add("hidden");
	document.querySelector(".alert span").innerHTML = scores;
	document.querySelector(".alert").style.display = "block";
}

function closeAlert() {
	document.querySelector(".alert").style.display = "none";
}