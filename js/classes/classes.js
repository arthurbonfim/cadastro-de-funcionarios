class Emmployee{
    constructor(name, age, position){
        this.name = name;
        this.age = age;
        this.position = position;
    }
    introduceYourself(){
        return `Olá, sou o funcionário ${this.name} e tenho ${this.age} anos de idade.`;
    }
    work(){
        return `O funcionário ${this.name}, de cargo ${this.position}, iniciou os seus trabalhos.`;
    }
}

class Manager extends Emmployee{
    constructor(name, age, department){
        super(name, age, 'Gerente');
        this.department = department;
    }
    manage(){
        return `O funcionário ${this.name} está gerenciando o departamento ${this.department}.`;
    }
}

class Developer extends Emmployee{
    constructor(name, age, pLanguage){
        super(name, age, 'Desenvolvedor');
        this.pLanguage = pLanguage;
    }
    program(){
        return `O funcionário ${this.name} está programando na linguagem ${this.pLanguage}.`
    }
}

export {Manager, Developer};
