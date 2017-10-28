alert("algo");
/*var nom=document.getElementsByName("nombre")[0].value;
//var nom1=document.getElementsByName("nombre")[0].value;
console.log("el nombre es \n"+nom);
//console.log(nombre[0].text);*/
function muestra(){
	var nom=document.getElementsByName("nombre")[0].value;
//var nom1=document.getElementsByName("nombre")[0].value;
	var corr=document.getElementById("correo").value;
console.log("el nombre es \n"+nom);
var fila="<tr><td>"+nom+"</td><td>"+corr+"</td></tr>";
	document.getElementById("tablita").innerHTML += fila;

	document.getElementsByTagName("input")[0].value =''
		document.getElementsByTagName("input")[1].value =''
}