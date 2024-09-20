import showError from "./showError.js";

const isNamevalid = (name) => {
    console.log(name.length);
    console.log(name);
    if(name.trim().length < 3){
        throw new Error('Nome deve ter ao menos 3 letras.')
    }
    return true
}

const isAgeValid = (age) => {
    if(Number(age) < 0){
        throw new Error('Idade deve ser um número positivo.');
    }
    return true;
}

const isDepartmentValid = (department) => {
    if(department === ''){
        throw new Error('Selecione um departamento valido.')
    }
    return true;
}

const isPLanguageValid = (pLanguage) => {
    if(pLanguage === ''){
        throw new Error('Selecione uma linguagem válida.')
    }
    return true;
}




const isFormValid = (event, name, age, isDev, isManager, department, pLanguage) => {
    let isValid = true;
    //verifica se o nome tem pelo menos 3 letras
    try{
        isNamevalid(name);
    } catch(error){
        event.preventDefault();
        showError(error);
        isValid = false;
    }
    //verifica se a idade e valida
    try{
        isAgeValid(age);
    } catch(error) {
        event.preventDefault();
        showError(error);
        isValid = false;
    }
    //se for gerente, verifica se foi selecionado um setor valido
    if(isManager){
        try{
            isDepartmentValid(department);
        } catch(error){
            event.preventDefault();
            showError(error);
            isValid = false;
        }
    }
    //se for programador, verifica se foi selecionado uma linguagem valida
    if(isDev){
        try{
            isPLanguageValid(pLanguage);
        } catch(error){
            event.preventDefault();
            showError(error);
            isValid = false;
        }
    }
    return isValid;
}

export default isFormValid;