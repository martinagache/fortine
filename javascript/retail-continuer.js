var bouton1;
var bouton2;
var bouton3;

function debut(){
	bouton1=document.getElementById("bouton1");
	bouton1.addEventListener("click",eviter);
	bouton2=document.getElementById("bouton2");
	bouton2.addEventListener("click",combattre);
	bouton3=document.getElementById("bouton3");
	bouton3.addEventListener("click",tuer);
}
function eviter(){
	window.location="retail-eviterleduel.html";
}
function combattre(){
	window.location="retail-prendreleduela2.html";
}
function tuer(){
	window.location="retail-tuerles2.html";
}

window.addEventListener("load",debut);