var bouton1;
var bouton2;

function debut(){
	bouton1=document.getElementById("bouton1");
	bouton1.addEventListener("click",mortbuisson);
	bouton2=document.getElementById("bouton2");
	bouton2.addEventListener("click",mortadverse);
}
function mortbuisson(){
	window.location="retail-mortbuisson.html";
}
function mortadverse(){
	window.location="retail-mortadverse.html";
}

window.addEventListener("load",debut);