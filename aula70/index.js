const pessoa1 =  new Object()
pessoa1.nome = 'Lucas'
pessoa1.sobrenome = 'Duarte'
pessoa1.idade = 22
pessoa1.falarNome = function(){
    return `${this.nome} está falando o seu nome!`
}

for(let chave in pessoa1){
    console.log(pessoa1[chave])
}

console.log(pessoa1.falarNome())