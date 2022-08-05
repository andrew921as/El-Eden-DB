//Obtener lista de animales
function getAnimales() {
  fetch('http://localhost:3001')
      .then(response => {
          return response.text();
      })
      .then(data => {
        console.log("Hola")
      });
}
//Crear animales
function createAnimal(
  id_animal,
  nombre_animal,
  talla,
  edad,
  tipo,
  motivo_ingreso,
  observaciones,
  estado,
  fecha_ingreso,
  fecha_salida) {
 /* 
  let id_animal = prompt('Ingresar codigo identificador')
  let nombre_animal = prompt('Ingresar nombre')
  let talla = prompt('Ingresar talla')
  let edad = prompt('Ingresar edad')
  let tipo = prompt('Ingresar tipo')
  let motivo_ingreso = prompt('Ingresar motivo de ingreso')
  let observaciones = prompt('Ingresar observaciones')
  let estado = prompt('Ingresar estado')
  let fecha_ingreso = prompt('Ingresar fecha de ingreso')
   */
  fetch(`http://localhost:3001/animales`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      //akki sepuede pone el console log creo
      body: JSON.stringify({ id_animal, nombre_animal, talla, edad, tipo, motivo_ingreso, observaciones, estado, fecha_ingreso, fecha_salida }),
  })
      .then(response => {
          return response.text();
      })
      .then(data => {
          alert(data);
          getAnimales();
      });
}

//Borrar un animal
function deleteAnimal() {
  let id = prompt('Ingresar codigo animal a borrar');
  fetch(`http://localhost:3001/animales/${id}`, {
      method: 'DELETE',
  })
      .then(response => {
          return response.text();
      })
      .then(data => {
          alert(data);
          getAnimales();
      });
}

export {
  getAnimales,
  createAnimal,
  deleteAnimal,

}