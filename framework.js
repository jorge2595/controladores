var col1 = document.getElementById('col1');
var col2 = document.getElementById('col2');
var col3 = document.getElementById('col3');
var nav1 = document.getElementById('nav1');
var nav_id = document.getElementById('nav_id');
var pagina = document.getElementById('pagina1');
var tabla = document.getElementById('tabla');
var link = document.getElementById("link").item(0);
//var link = document.getElementById("link").item(1);

var boton1 = document.querySelector("#pagina1");
var boton2 = document.querySelector("#pagina2");
var boton3 = document.querySelector("#pagina3");

boton3.addEventListener("click",materialize);
boton1.addEventListener("click",foundation);
boton2.addEventListener("click",bootstrapp);

function materialize(){
	link.herf ="css/materialize.min.css";
	col1.className = "col s12 m4 l3";
	col2.className = "col s12 m8 l6";
	col3.className = "col s12 m12 l3";
	nav1.className = "nav-extended";
	nav_id.className = "nav-wrapper";
	boton1.className = "btn";
	boton2.className = "btn";
	boton3.className = "btn";
	pagina.className = "brand-pagina center";
	tabla.className = "responsive-table";
}

function foundation(){
	link.herf = "css/foundation.min.css";
}

function bootstrapp(){
	link.herf = "css/bootstrapp.min.css";
}