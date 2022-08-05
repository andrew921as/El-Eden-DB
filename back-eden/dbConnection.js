const Pool = require('pg').Pool
const pool = new Pool({
    user: 'Andres',
    host: 'localhost',
    database: 'Eden2',
    password: 'Contralacena2014',
    port: 5432,
});

const getAnimales = () => {
    return new Promise(function (resolve, reject) {
        pool.query('SELECT * FROM animales ORDER BY id_animal ASC;', (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(results.rows);
        })
    })
}
const createAnimal = (body) => {
    return new Promise(function (resolve, reject) {
        const { id_animal, nombre_animal, talla, edad, tipo, motivo_ingreso, observaciones, estado, fecha_ingreso, fecha_salida } = body
        pool.query('INSERT INTO animales (id_animal, nombre_animal, talla, edad, tipo, motivo_ingreso, observaciones) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *; INSERT INTO tiempo_estancia_animal (id_animal, fecha_ingreso, fecha_salida, tiempo_estancia) VALUES ($1, $9, $10, 5000) RETURNING *; INSERT INTO fecha_salida_animal (id_animal, estado, fecha_salida) VALUES ($1, $8, $10) RETURNING *;', [id_animal, nombre_animal, talla, edad, tipo, motivo_ingreso, observaciones, estado, fecha_ingreso, fecha_salida], (error, results) => {
            if (error) {
                reject(error)
            }
            resolve(`A new merchant has been added added: ${results.rows[0]}`)
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
    createAnimal,
    deleteAnimal,
}