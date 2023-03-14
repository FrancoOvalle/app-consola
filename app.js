require('colors'); 

const { guardarDb, leerDb } = require('./helpers/guardarArchivo');
//const { mostrarMenu, pausa } = require('./helpers/mensaje');
const { inquirerMenu, pausa, leerInput,listadoTareasBorrar , confirmar, mostrarListadoChecklist } = require('./helpers/inquirer');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


const main = async () => {
    
    let opt = '';
    const tareas = new Tareas();

    const tareasDb = leerDb();

    if( tareasDb ){
        //establecer las tareas
        
        tareas.cargarTareasFromArray( tareasDb );
        
    }
    // await pausa();


    do{
        // Esto imprime el menu y asigna la respuesta a opt
        opt =  await inquirerMenu();
        
        switch(opt){
            case '1':
                //crear tarea
                const desc = await leerInput('Descripcion: ');
                tareas.crearTarea( desc );
            break;
            
            case '2':
                //Listar Tareas
                tareas.listadoCompleto(tareasDb);
            break;
            case '3':
                tareas.listarPendientesCompletadas();
            break;
            case '4':
                tareas.listarPendientesCompletadas(false);
            break;
            case '5': //Completado | Pendiente
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                // console.log(ids);
                tareas.toggleCompletadas(ids)
            break;
            case '6': //Borrar tarea
                const id = await listadoTareasBorrar( tareas.listadoArr );
                if( id !== '0'){
                    const ok  = await confirmar('¿Esta seguro de eliminar?');
                    //TODO: preguntar si esta seguro 
                    if( ok ){
                        tareas.borrarTarea( id );
                        console.log('Tarea Borrada');
                    }
                }
                
            break;

        }

        guardarDb( tareas.listadoArr );

        await pausa();
        // if(opt !== '0') await pausa();

    }while( opt !== '0');
    
    //pausa();
}

main();