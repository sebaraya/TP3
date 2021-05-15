const process = require('process');
const { listar, crear, leerPorEstado } = require('./tareas3/ft3.js');
let accion = process.argv[2];

switch (accion) {
    case undefined:
        console.log('Solo se permiten los comandos: listar => (L), crear => (C), estado => (E)')
        break;
    case 'listar',"L":
        return listar()
        break;
    case 'crear',"C":
        crear(process.argv[3], process.argv[4])
        return listar()
        break;
    case 'estado',"E":
        leerPorEstado(process.argv[3])
        break;
    default:
        console.log('Unicos comandos disponibles: listar => L -- crear => C -- estado => E')
        break;
};