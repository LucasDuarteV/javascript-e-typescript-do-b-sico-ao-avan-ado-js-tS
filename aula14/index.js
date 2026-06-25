const nome = prompt("Digite seu nome: ")

document.body.innerHTML = `Seu nome é: ${nome} <br>`
document.body.innerHTML += `Seu nome tem ${nome.length} letras <br>`
document.body.innerHTML += `A segunda letra do seu nome é ${nome[1]} <br>`
document.body.innerHTML += `Qual é o primeiro índice da letra ${nome[0]} no seu nome? ${nome.indexOf(nome[0])} <br>`
document.body.innerHTML += `Qual é o último índice da letra ${nome[nome.length - 1]} no seu nome? ${nome.lastIndexOf(nome[nome.length - 1])} <br>`
document.body.innerHTML += `As últimas três letras do seu nome são: ${nome.slice(-3)} <br>`
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br>`
document.body.innerHTML += `Seu nome com letras maiúsculas: ${nome.toUpperCase()} <br>`
document.body.innerHTML += `Seu nome com letras minúsculas: ${nome.toLowerCase()} <br>`