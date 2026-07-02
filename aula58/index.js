function Pessoa(nome , sobrenome){

    const id = 123456

    const metodoInterno = function(){

    }

    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome + ': sou um método')
    }

}

const p1 = new Pessoa('Lucas' , 'Duarte')
console.log(p1)
console.log(p1.metodo())