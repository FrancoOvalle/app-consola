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

    borrarTarea( id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
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

    listadoCompleto( tareas = ''){
        //1. tarea 
        //Completada : verde
        //Pendiente : Rojo
        //1 (verde) desc :: Completada | Pendiente
        console.log();
        this.listadoArr.forEach( (tarea, i) =>{
            const idx = `${i + 1}`.green;
            const { desc, completadoEn} = tarea; 
            const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            
            console.log(`${ idx }. ${ desc } :: ${ estado } `);

        });

        
        // let i = 1;
        // tareas.forEach ( tarea =>{
        //     this._listado[tarea.desc]= tarea;
        //     const { id, desc, completadoEn } = this._listado[tarea.desc];
        //     if(completadoEn == null){
        //         console.log(`${ i } ${desc} :: ${'pendiente'.red}`);
        //     }else{
        //         console.log(`${ i } ${desc} ::${'completado'.green }`);
        //     }
            
        //     i++; 
        // });


    }

    listarPendientesCompletadas( completadas = true){

        
            console.log();
            let contador = 0;
            this.listadoArr.forEach( (tarea, i) =>{
            // const idx = `${i + 1}`.green;
            const { desc, completadoEn} = tarea; 
            const estado = (completadoEn)
                                ? 'Completada'.green
                                : 'Pendiente'.red;
            if(completadas){
                if(completadoEn){
                    contador += 1;
                    console.log(`${ (contador+'.').green} ${ desc } :: ${ estado } `);
                }
                
            }else{
                if(!completadoEn){
                    contador += 1;
                    console.log(`${ (contador+'.').green} ${ desc } :: ${ estado } `);
                }
            }
            

        });
    }
}

module.exports = Tareas;
