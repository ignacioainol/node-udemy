const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    try {
        let data = JSON.stringify(listadoPorHacer,null,4);
        fs.writeFile('./db/data.json', data, (err) => {
            if (err) throw err;
            console.log("data has been added to data.json");
        });

    } catch (error) {
        console.log(error);
    }
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    return require('../db/data.json');
}

module.exports = {
    crear,
    getListado
}