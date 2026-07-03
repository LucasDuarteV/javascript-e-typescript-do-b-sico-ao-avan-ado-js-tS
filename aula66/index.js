const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]

const umaString = pessoas.map(obj => obj.nome)
console.log('----------------------')
console.log(umaString)
const removaChaveNome = pessoas.map(obj => ({idade: obj.idade}))
console.log('----------------------')
console.log(removaChaveNome)
const id = pessoas.map(function(obj,indice){
    obj.id = (indice + 1)
    return obj
})
console.log('----------------------')
console.log(id)