
const fs = require('fs');
const leerJson = JSON.parse(fs.readFileSync('./data3/tareas3.json', 'utf-8'));

const listado = {
    listar : function () {
        leerJson.forEach((tarea, i) => {
            console.log(`${i + 1}- ${tarea.titulo} = ${tarea.estado}`)
        });
    },
    escribirJson: function (listado) {
        fs.writeFileSync('./data3/tareas3.json', JSON.stringify(leerJson, null, 2), 'utf-8');
    },
    nuevaTarea: (titulo, estado = 'pendiente') => {
        let = nuevaTarea = {
            titulo,
            estado
        }
        leerJson.push(nuevaTarea)
        listado.escribirJson()
    },
    leerPorEstado: function (filtro) {
        let filtrarPorEstado = leerJson.filter(tarea => tarea.estado === filtro || tarea.titulo.includes(filtro));
        console.log(filtrarPorEstado)
    }
}
module.exports = listado