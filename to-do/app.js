const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
    break;

    case 'actualizar':
        console.log("Updating a task");
    break;

    default:
        console.log("Command not found");

}