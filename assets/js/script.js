class Propietario {
	constructor(nombre, direccion, telefono) {
		this._nombre = nombre;
		this._direccion = direccion;
		this._telefono = telefono;
	}

	datosPropietario() {
		return `  El nombre del dueño: ${this._nombre},
        <hr> El domicilio es: ${this._direccion},
        <hr>Numero de telefono de contacto: ${this._telefono}`;
	}
}

class Animal extends Propietario {
	constructor(nombre, direccion, telefono, tipo) {
		super(nombre, direccion, telefono);
		this._tipo = tipo;
	}

	get getTipo() {
		return `El tipo del nombre: ${this._tipo}`;
	}
}

class Mascota extends Animal {
	constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
		super(nombre, direccion, telefono, tipo);
		this._nombreMascota = nombreMascota;
		this._enfermedad = enfermedad;
	}

	get getnombreMascota() {
		return this._nombreMascota;
	}

	set setnombreMascota(NuevoNombreMascota) {
		this._nombreMascota = NuevoNombreMascota;
	}

	get getEnfermedad() {
		return this._enfermedad;
	}

	set setEnfermedad(NuevaEnfermedad) {
		this._enfermedad = NuevaEnfermedad;
	}
	datoMascota() {
		return `<hr>El tipo de animal es: ${this._tipo}
         <hr>  Nombre de la mascota es: ${this._nombreMascota}
         <hr>  motivo de la consulta: ${this._enfermedad}`;
	}
}

let propietario = document.getElementById("propietario");
let telefono = document.getElementById("telefono");
let direccion = document.getElementById("direccion");
let nombreMascota = document.getElementById("nombreMascota");
let tipo = document.getElementById("tipo");
let enfermedad = document.getElementById("enfermedad");
let agregar = document.getElementById("agregar");

agregar.addEventListener("click", (e) => {
	e.preventDefault();

	const mascotas = new Mascota();

	mascotas._nombre = propietario.value;
	mascotas._direccion = direccion.value;
	mascotas._telefono = telefono.value;
	mascotas._nombreMascota = nombreMascota.value;
	mascotas._tipo = tipo.value;
	mascotas._enfermedad = enfermedad.value;

	const resultado = document.getElementById("resultado");

	const llamada1 = document.createElement("ul");
	llamada1.innerHTML = mascotas.datosPropietario();
	const llamada2 = document.createElement("ul");
	llamada2.innerHTML = mascotas.datoMascota();

	resultado.appendChild(llamada1);
	resultado.appendChild(llamada2);
});
