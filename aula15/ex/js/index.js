let numero = parseFloat(prompt('Digite seu número'))

let numeroTitulo = document.getElementById('numero-titulo')
let texto = document.getElementById('texto')
let raiz = document.getElementById('raiz')
let numeroInteiro = document.getElementById('numero-int')
let inteiro = document.getElementById('inteiro')
let nan = document.getElementById('nan')
let arredondadoBaixo = document.getElementById('arredondado-baixo')
let arredondadoCima = document.getElementById('arredondado-cima')
let casasDecimais = document.getElementById('duas-decimais')

numeroTitulo.innerHTML = numero
raiz.innerHTML = Math.sqrt(numero)
numeroInteiro.innerHTML = numero
inteiro.innerHTML = Number.isInteger(numero)
nan.innerHTML = Number.isNaN(numero)
arredondadoBaixo.innerHTML = Math.floor(numero)
arredondadoCima.innerHTML = Math.ceil(numero)
casasDecimais.innerHTML = numero.toFixed(2)

//55.1987555
