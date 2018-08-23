const direccion = {
    alias: 'd',
    desc: 'Dirección de la cuidad para obtener el clima',
    demand: true
};


const argv = require('yargs')
    .options('ciudad', direccion)
    .help()
    .argv;


module.exports = {
    argv
}