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

const getPatrocinador = (tipoDato,dato) => {
    return new Promise(function (resolve, reject) {
        if (tipoDato == "Todos") {
            pool.query(`SELECT * FROM datos_patrocinador ORDER BY cedula ASC;`, (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows);
            })
        }
        else if (tipoDato == "Cedula") {
            pool.query(`SELECT * FROM datos_patrocinador WHERE cedula = '${dato}' ORDER BY cedula ASC;`, (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows);
            })
        }
        else {
            pool.query(`SELECT * FROM datos_patrocinador WHERE nombre = '${dato}' ORDER BY cedula ASC;`, (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows);
            })
        }
    })
}

const getAnimal = (tipoDato, dato) => {
    return new Promise(function (resolve, reject) {
        if (tipoDato == "Todos") {
            pool.query(`SELECT * FROM datos_animal ORDER BY id_animal ASC;`, (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows);
            })
        }
        else if (tipoDato == "Id Animal") {
            pool.query(`SELECT * FROM datos_animal WHERE id_animal = '${dato}' ORDER BY id_animal ASC;`, (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows);
            })
        }
        else {
            pool.query(`SELECT * FROM datos_animal WHERE nombre_animal = '${dato}' ORDER BY id_animal ASC;`, (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows);
            })
        }
    })
}

const getVoluntario = (tipoDato, dato) => {
    return new Promise(function (resolve, reject) {
        console.log(tipoDato)
        console.log(dato)
        if (tipoDato == "Todos") {
            pool.query(`SELECT * FROM datos_voluntario ORDER BY cedula ASC;`, (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows);
            })
        }
        else if (tipoDato == "Id Voluntario") {
            pool.query(`SELECT * FROM datos_voluntario WHERE cedula = '${dato}' ORDER BY cedula ASC;`, (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows);
            })
        }
        else {
            pool.query(`SELECT * FROM datos_voluntario WHERE nombre = '${dato}' ORDER BY cedula ASC;`, (error, results) => {
                if (error) {
                    reject(error)
                }
                resolve(results.rows);
            })
        }
    })
}

const validarLogin = (body) => {
    return new Promise(function (resolve, reject) {
        const { usuario, contrasena } = body
        let encontrado = false
        let resultados = []
        pool.query(`SELECT * FROM usuarios WHERE user_name = '${usuario}' AND password= '${contrasena}' ORDER BY id_voluntario ASC;`, (error, results) => {
            if (error) {
                reject(error)
            }
            console.log(usuario)
            console.log(contrasena)
            console.log(results.rowCount)
            if (results.rowCount>0) {
                encontrado = true
                resultados.push(encontrado)
                resultados.push(results.rows)
                resolve(resultados)
            }
            else {
                resolve("No se encontraron datos")
            }

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

const actualizarAnimal = (body) => {
    return new Promise(function (resolve, reject) {
        const { id_animal, nombre_animal, talla, edad, tipo, motivo_ingreso, observaciones, estado, fecha_ingreso, fecha_salida } = body
        console.log(id_animal)
        pool.query(`UPDATE datos_animal SET nombre_animal = $1, talla = $2, edad = $3, tipo= $4, motivo_ingreso = $5, observaciones = $6, estado =$7, fecha_ingreso = $8, fecha_salida = $9 WHERE id_animal = '${id_animal}';`, [nombre_animal, talla, edad, tipo, motivo_ingreso, observaciones, estado, fecha_ingreso, fecha_salida], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Se ha actualizado: ${nombre_animal}`)
        })
    })
}

const actualizarPatrocinador = (body) => {
    return new Promise(function (resolve, reject) {
        const { cedula, nombre, apellido, correo, telefono, tipo_via, numero_calle, numero_casa, tipo } = body
        console.log(cedula)
        pool.query(`UPDATE datos_patrocinador SET nombre = $1, apellido = $2, correo= $3, telefono = $4, tipo_via = $5, numero_calle =$6, numero_casa = $7, tipo = $8 WHERE cedula = '${cedula}';`, [nombre, apellido, correo, telefono, tipo_via, numero_calle, numero_casa, tipo], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Se ha actualizado: ${nombre}`)
        })
    })
}

const actualizarVoluntario = (body) => {
    return new Promise(function (resolve, reject) {
        const { nombre, cedula, cargo, telefono, usuario, contrasena } = body
        console.log(cargo)
        pool.query(`UPDATE datos_voluntario SET nombre = $1, cargo = $2, telefono = $3, username = $4, password = $5 WHERE cedula = '${cedula}';`, [nombre, cargo, telefono, usuario, contrasena], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`Se ha actualizado: ${nombre}`)
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
    getAnimal,
    getPatrocinador,
    getVoluntario,
    validarLogin,
    createAnimal,
    createPatrocinador,
    createVoluntario,
    actualizarAnimal,
    actualizarPatrocinador,
    actualizarVoluntario,
    deleteAnimal,
}