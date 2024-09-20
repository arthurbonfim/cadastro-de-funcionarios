import {Manager, Developer} from './classes/classes.js';
import handleSelectChange from './service/handleSelectChange.js';
import isFormValid from './service/isFormValid.js';

let selectLang = document.getElementById('secLang');
let selectDep = document.getElementById('secDep');
let selectLangAndDep = document.getElementsByClassName('selectLangAndDep');

//exibe o campo 'linguagem' se o cargo for programador
document.getElementById('developer')
.addEventListener('change', handleSelectChange(selectLang, selectLangAndDep));
//oculta o campo 'departamento' se o cargo for gerente
document.getElementById('manager')
.addEventListener('change', handleSelectChange(selectDep, selectLangAndDep));


document.getElementById('myform').addEventListener('submit', (event) => {
    let name = document.getElementById('nameInput').value;
    let age = document.getElementById('age').value;
    let pLanguage = document.getElementById('langSelect').value;
    let department = document.getElementById('depSelect').value;
    let isDev = document.getElementById('developer').checked;
    let isManager = document.getElementById('manager').checked;

    
    if(isFormValid(event, name, age, isDev, isManager, department, pLanguage)){
        let position;
        if(isDev){
            position = 'Desenvolvedor';
        }else if(isManager){
            position = 'Gerente';
        }
        alert(`
            Funcionário cadastrado com sucesso!
            ------------------------------------------

            Nome: ${name};
            Idade: ${age} anos;
            Cargo: ${position}.
        `);
        let employee;
        if(isDev){
            employee = new Developer(name, age, pLanguage);
            alert(employee.introduceYourself());
            alert(employee.work());
            alert(employee.program());
        }else if(isManager){
           employee = new Manager(name, age, department);
           alert(employee.introduceYourself());
           alert(employee.work());
           alert(employee.manage());
        }
    }
});

