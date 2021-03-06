const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'listar':
        let listado = porHacer.getListado();

        for(let tarea of listado){
            console.log('========por hacer==========');
            console.log('Tarea: ', tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('===========================');
        }
    break;

    default:
        console.log("Command not found");

}