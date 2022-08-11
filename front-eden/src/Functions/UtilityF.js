
let clientId = "Ejemploid";
let clientName = "Nombre Ejemplo";

let clienteCedula = '';
let clienteNombre = '';

let animalId="";
let animalName="";
let animalType="";

let idAnimal='';
let nombreAnimal='';
let especieAnimal='';


const getClientDataP = (object)=>{
	clientId=object.id;
	clientName=object.name;
}

const getAnimalDataP = (Aobject)=>{
	animalId=Aobject;
	animalName=Aobject;
	animalType=Aobject;
}

const getCliente = (object) =>{
	clienteCedula=object.cedula;
	clienteNombre=object.nombre;
}

const getAnimal = (object) =>{
	idAnimal=object.id;
	nombreAnimal=object.Nombre;
	especieAnimal=object.Especie;
}


export {
clientId,
clientName,
animalId,
animalName,
animalType,
getClientDataP,
getAnimalDataP,
clienteCedula,
clienteNombre,
getCliente,
getAnimal, 
idAnimal,
nombreAnimal,
especieAnimal

};