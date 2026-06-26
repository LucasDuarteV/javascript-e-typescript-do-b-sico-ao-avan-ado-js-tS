function criarPessoa(nome , sobrenome, idade){
return{
    Nome: nome,
    Sobrenome: sobrenome,
    Idade: idade
}
}

const pessoaUm = criarPessoa('Lucas' , 'Duarte' , 22)
console.log(pessoaUm.Nome)

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala(){
        console.log(`A minha idade é ${this.idade}`)
    },
    IncrementaIdade(){
        this.idade++; 
    }
}

pessoa1.fala()
pessoa1.IncrementaIdade()
pessoa1.fala()
