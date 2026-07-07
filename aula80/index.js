class Pessoa{
    constructor(nome,sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    falar(){
        console.log(`${this.nome} está falando`)
    }

    beber(){
         console.log(`${this.nome} está bebendo`)
    }

    comendo(){
         console.log(`${this.nome} está comendo`)
    }
}

const p1 = new Pessoa('Lucas' , 'Duarte')
console.log(p1)
p1.falar()
p1.comendo()
p1.beber()
