const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Duarte',
    idade: 22
}

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}