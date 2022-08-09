
let clientId = "Ejemploid";
let clientName = "Nombre Ejemplo";

let animalId="";
let animalName="";
let animalType="";

const getClientDataP = (object)=>{
	clientId=object.id;
	clientName=object.name;
}

const getAnimalDataP = (Aobject)=>{
	animalId=Aobject;
	animalName=Aobject;
	animalType=Aobject;
}


export {
clientId,
clientName,
animalId,
animalName,
animalType,
getClientDataP,
getAnimalDataP,

};