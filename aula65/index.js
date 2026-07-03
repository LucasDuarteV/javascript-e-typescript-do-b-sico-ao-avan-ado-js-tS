const pessoas = [
    {nome: 'Luiz' , idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
]
const nomeGrande = pessoas.filter(obj => obj.nome.length >= 5)
const maisAnos = pessoas.filter(obj => obj.idade > 50)
const ultimoA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a'))

console.log(maisAnos)
console.log(nomeGrande)
console.log(ultimoA)