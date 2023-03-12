require('colors'); 

//const { mostrarMenu, pausa } = require('./helpers/mensaje');
const { inquirerMenu, pausa } = require('./helpers/inquirer');

// console.clear();

const main = async () => {
    
    // console.log('hola mundo');

    let opt = '';

    do{

       opt =  await inquirerMenu();
        console.log({opt});
       await pausa();
        // if(opt !== '0') await pausa();

    }while( opt !== '0');
    
    //pausa();
}

main();