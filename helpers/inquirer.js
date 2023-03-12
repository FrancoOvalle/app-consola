const inquirer = require('inquirer');
// import inquirer from 'inquirer';

require('colors');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué desea hacer?',
        choices: [
            {
            value: '1',
            name: '1. Crear Tarea'
        }, 
        {
            value: '2',
            name: '2. Listar Tareas'
        },
        {
            value: '3',
            name: '3. Listar Tareas Completadas'
        },
        {
            value: '4',
            name: '4. Listar Tareas Pendientes'
        },
        {
            value: '5',
            name: '5. Completar Tarea(s)'
        },
        {
            value: '6',
            name: '6. Borrar Tarea'
        },
        {
            value: '0',
            name: '0. Salir'
        }
    ]
    }
]

const inquirerMenu = async () =>{
   
    // console.clear();
    
    console.log('====================='.green);
    console.log('Seleccione una Opcion'.green);
    console.log('=====================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);
 
    return opcion;
}

const pausa = async () =>{


    const question =[
        {
            type: 'input',
            name: 'enter',
            message: `\n Presione ${'ENTER'.green} para continuar \n `
        }
    ];
    console.log('\n');
    await inquirer.prompt(question)
}

module.exports = {
    inquirerMenu,
    pausa
}