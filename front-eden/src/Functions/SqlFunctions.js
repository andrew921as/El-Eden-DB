
const user = "Carlos es gay";
let busquedas;


async function getPatrocinadores(tipoBusqueda, data) {
   await fetch(`http://localhost:3001/patrocinadores/${tipoBusqueda}/${data}`)
      .then(response => {
          return response.text();
      })
      .then(data => {
        busquedas=JSON.parse(data);
          console.log("Es la busqueda pa "+JSON.stringify(data))
      });
}

async function getAllPatrocinadores() {
    await fetch(`http://localhost:3001/patrocinadores/todos`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            busquedas=JSON.parse(data);
            console.log(data)
        });
}

async function getAnimales(tipoBusqueda, data) {
    await fetch(`http://localhost:3001/animales/${tipoBusqueda}/${data}`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            console.log(data);
        });
}

async function getAllAnimales() {
    await fetch(`http://localhost:3001/animales/todos`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            busquedas = data;
            console.log(data)
        });
}

async function getVoluntarios(tipoBusqueda, data) {
    await fetch(`http://localhost:3001/voluntarios/${tipoBusqueda}/${data}`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            console.log(data)
        });
}

async function getAllVoluntarios() {
    await fetch(`http://localhost:3001/voluntarios/todos`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            console.log(data)
        });
}


//Crear animales
async function createAnimal(
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
    await fetch(`http://localhost:3001/animales`, {
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

async function createPatrocinador(
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
        await fetch(`http://localhost:3001/patrocinadores`, {
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

async function createVoluntario(nombre, cedula, cargo, telefono, usuario, contrasena) {
    await fetch(`http://localhost:3001/voluntarios`, {
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
async function deleteAnimal() {
  let id = prompt('Ingresar codigo animal a borrar');
  await fetch(`http://localhost:3001/animales/${id}`, {
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
  busquedas,

}