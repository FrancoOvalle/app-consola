require('colors'); 

//const { mostrarMenu, pausa } = require('./helpers/mensaje');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


const main = async () => {
    
    let opt = '';
    const tareas = new Tareas();

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
                console.log( tareas.listadoArr );
            break;

        }

        await pausa();
        // if(opt !== '0') await pausa();

    }while( opt !== '0');
    
    //pausa();
}

main();