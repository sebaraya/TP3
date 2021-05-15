const process = require('process');
const { listar, nuevaTarea, leerPorEstado } = require('./tareas3/ft3.js');
let accion = process.argv[2];
switch (accion) {
    case undefined:
        console.log("Solo se permiten los comandos: L    -     N      -             F "),
        console.log('                            (listar) (nuevaTarea) (filtro por estado/tarea)')
        break;
    case ("listar","L"):
        return listar()
        break;
    case ("nuevaTarea","N"):
        nuevaTarea(process.argv[3], process.argv[4])
        return listar()
        break;
    case ("estado","F"):
        leerPorEstado(process.argv[3])
        break;
    default:
        console.log("Solo se permiten los comandos: L    -     N      -            F "),
        console.log('                            (listar) (nuevaTarea) (filtro por estado/tarea)')
        break;
};