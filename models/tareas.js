/**
 * 
 * _listado:
 *      { 'uuid-123145-123123-2: {id:12, desc: asd, completadoEn:99238}},
 *      { 'uuid-123145-123123-2: {id:12, desc: asd, completadoEn:99238}},
 *      { 'uuid-123145-123123-2: {id:12, desc: asd, completadoEn:99238}},
 * 
 */

const Tarea = require("./tarea");

class Tareas {
    _listado = {};
    
    get listadoArr(){

        const listado = [];
        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key];
            listado.push( tarea );
        });
        return listado;
    }

    constructor(){
        this._listado = {};
    }
    cargarTareasFromArray ( tareas = []){
        // console.log('Esto trae tareas ',tareas);

        tareas.forEach ( tarea =>{
            this._listado[tarea.id]= tarea;
        });
    }

    crearTarea( desc = ''){

        const tarea = new Tarea( desc );

        this._listado[tarea.id] = tarea;

    }
}

module.exports = Tareas;
