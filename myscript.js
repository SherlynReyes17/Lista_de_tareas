	let Lista = document.getElementById("tarea");
    let Tarea = document.getElementById("tabla");
    let Añadir = document.getElementById("boton");
	function agregarTarea() {
	let fila = document.createElement("tr");
	        fila.innerHTML = `
						  <td> <input type="checkbox" onClick="completar()" /> </td>
						  <td style="flex-grow: 2"> ${Lista.value} </td>
						  <td> <span onClick="borrar()"> x </span> </td>
						  `;
	  	tabla.appendChild(fila);
		Lista.value = "";
	}
	boton.addEventListener("click", function (e) {
		if (Lista.value === "") {
			return false;
		} else {
		  agregarTarea();
		}
	  });
	  function borrar(event) {
		  this.event.target.parentElement.parentElement.remove();
		}

function capturar() {
		let nombre = document.getElementById("nombre").value;
		sessionStorage.setItem("claveNombre", nombre);
		document.getElementById("nombre").value = "";
}
function mostrar() {
	let getNombre = sessionStorage.getItem("claveNombre");
	document.getElementById("pNombre").innerHTML = getNombre;
}