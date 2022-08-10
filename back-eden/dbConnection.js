const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Eden2',
    password: 'pg123',
    port: 5432,
});

const getAnimales = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM animales ORDER BY id_animal ASC;', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`???'`);
        })
    })
}

const getPatrocinador = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM patrocinadores ORDER BY id_animal ASC;', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Pija`);
        })
    })
}

const createAnimal = (body) => {
    return new Promise(function (resolve, reject) {
        const { id_animal, nombre_animal, talla, edad, tipo, motivo_ingreso, observaciones, estado, fecha_ingreso, fecha_salida } = body
        let tiempo_estancia = 0;
        const tiempo_estancia_func = (fecha_ingreso, fecha_salida) => {
            let indexIngreso = 0;
            let indexSalida = 0;
            let counter = 0;
            for (let i = 0; i < fecha_ingreso.length; i++) {
                if (fecha_ingreso[i] === "-") {
                    counter++;
                }
                if (counter == 2) {
                    indexIngreso = i;
                    counter = 0;
                    break;
                }
            }
            for (let i = 0; i < fecha_salida.length; i++) {
                if (fecha_salida[i] == "-") {
                    counter++;
                }
                if (counter == 2) {
                    indexSalida = i;
                    break;
                }
            }
            indexSalida = parseInt(fecha_salida.slice(indexSalida + 1, indexSalida + 3))
            indexIngreso = parseInt(fecha_ingreso.slice(indexIngreso + 1, indexIngreso + 3))
            tiempo_estancia = indexSalida - indexIngreso
        }
        if (!fecha_salida) {
            pool.query('INSERT INTO datos_animal (id_animal, nombre_animal, talla, edad, tipo, motivo_ingreso, observaciones, estado, fecha_ingreso, fecha_salida, tiempo_estancia) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, NULL, NULL) RETURNING *;', [id_animal, nombre_animal, talla, edad, tipo, motivo_ingreso, observaciones, estado, fecha_ingreso], (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(`A new animal has been added added: ${nombre_animal}`)
            })
        }
        else {
            tiempo_estancia_func(fecha_ingreso, fecha_salida)
            pool.query('INSERT INTO datos_animal (id_animal, nombre_animal, talla, edad, tipo, motivo_ingreso, observaciones, estado, fecha_ingreso, fecha_salida, tiempo_estancia) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *;', [id_animal, nombre_animal, talla, edad, tipo, motivo_ingreso, observaciones, estado, fecha_ingreso, fecha_salida, tiempo_estancia], (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(`A new animal has been added: ${nombre_animal}`)
            })
        }
        
    })
}

const createPatrocinador = (body) => {
    return new Promise(function (resolve, reject) {
        const { cedula, nombre, apellido, correo, telefono, tipo_via, numero_calle, numero_casa, tipo } = body
        pool.query('INSERT INTO datos_patrocinador (cedula,nombre,apellido,correo,telefono,tipo_via,numero_calle,numero_casa,tipo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;', [cedula, nombre, apellido, correo, telefono, tipo_via, numero_calle, numero_casa, tipo], (error, results) => {
        if (error) {
            reject(error)
        }
        resolve(`A new patrocinador has been added: ${nombre}`)
    })
})
}

const createVoluntario = (body) => {
    return new Promise(function (resolve, reject) {
        const { nombre, cedula, cargo, telefono, usuario, contrasena } = body
        pool.query('INSERT INTO datos_voluntario (nombre,cedula,cargo,telefono,username,password) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;', [nombre, cedula, cargo, telefono, usuario, contrasena], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new patrocinador has been added: ${nombre}`)
        })
    })
}


const deleteAnimal = (id) => {
    return new Promise(function (resolve, reject) {
        //const id = parseInt(request.params.id)
        pool.query(`DELETE FROM animales WHERE id_animal = $1;`, [id], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Se borraron todos los animales con el siguiente id: ${id}`)
        })
    })
}

module.exports = {
    getAnimales,
    getPatrocinador,
    createAnimal,
    createPatrocinador,
    createVoluntario,
    deleteAnimal,
}