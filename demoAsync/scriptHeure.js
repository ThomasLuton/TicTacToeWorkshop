// JavaScript source code

//gestion de l'horloge

var now = new Date();
document.getElementById("hour").innerHTML = now.getHours() + "h";
document.getElementById("minute").innerHTML = now.getMinutes() + "m";
document.getElementById("second").innerHTML = now.getSeconds() + "s";

//gestion du calcul Mental

var first = getRandomInt(1, 99);
var deuxieme = getRandomInt(1, 99);
var somme = first + deuxieme;

document.getElementById("first").innerHTML = first;
document.getElementById("deuxieme").innerHTML = deuxieme;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const btn = document.getElementById("bouton");
btn.addEventListener('click', function () {
    const result = document.getElementById("result").value;
    if (somme == result) {
        alert("Bonne reponse");
    }
    else {
        alert("Mauvaise reponse");
    }
});