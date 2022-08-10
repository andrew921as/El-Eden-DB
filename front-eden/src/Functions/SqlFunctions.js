
const user = "Carlos es gay";
let busquedaPa= [];


function getPatrocinadores(tipoBusqueda, data) {
    fetch(`http://localhost:3001/patrocinadores/${tipoBusqueda}/${data}`)
      .then(response => {
          return response.text();
      })
      .then(data => {
         busquedaPa=data;
          console.log(data)
      });
}

function getAllPatrocinadores() {
    fetch(`http://localhost:3001/patrocinadores/todos`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            busquedaPa = data;
            console.log(data)
        });
}

function getAnimales(tipoBusqueda, data) {
    fetch(`http://localhost:3001/animales/${tipoBusqueda}/${data}`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            console.log(data);
        });
}

function getAllAnimales() {
    fetch(`http://localhost:3001/animales/todos`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            busquedaPa = data;
            console.log(data)
        });
}

function getVoluntarios(tipoBusqueda, data) {
    fetch(`http://localhost:3001/voluntarios/${tipoBusqueda}/${data}`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            console.log(data)
        });
}

function getAllVoluntarios() {
    fetch(`http://localhost:3001/voluntarios/todos`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            busquedaPa = data;
            console.log(data)
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

function createPatrocinador(
    cedula,
    nombre,
    apellido,
    correo,
    telefono,
    tipo_via,
    numero_calle,
    numero_casa,
    tipo
    ) {
    fetch(`http://localhost:3001/patrocinadores`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        //akki sepuede pone el console log creo
        body: JSON.stringify({
            cedula,
            nombre,
            apellido,
            correo,
            telefono,
            tipo_via,
            numero_calle,
            numero_casa,
            tipo }),
    })
        .then(response => {
            return response.text();
        })
        .then(data => {
            alert(data);
            getAnimales();
        });
}

function createVoluntario(nombre, cedula, cargo, telefono, usuario, contrasena) {
    fetch(`http://localhost:3001/voluntarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        //akki sepuede pone el console log creo
        
        body: JSON.stringify({ nombre, cedula, cargo, telefono, usuario, contrasena}),
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
  getPatrocinadores,
  getVoluntarios,
  getAllAnimales,
  getAllPatrocinadores,
  getAllVoluntarios,
  createAnimal,
  createPatrocinador,
  createVoluntario,
  deleteAnimal,
  user,
  busquedaPa,

}